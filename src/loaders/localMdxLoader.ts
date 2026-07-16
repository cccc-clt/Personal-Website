import { readFile, readdir } from 'node:fs/promises';
import { basename, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { Loader, LoaderContext } from 'astro/loaders';

interface RenderedEntry {
  html: string;
  metadata?: { imagePaths?: string[] };
}

interface ContentEntryType {
  getEntryInfo: (options: {
    contents: string;
    fileUrl: URL;
  }) => Promise<{ body: string; data: Record<string, unknown> }>;
  getRenderFunction?: (
    config: LoaderContext['config'],
  ) => Promise<
    | ((options: {
        id: string;
        data: Record<string, unknown>;
        body: string;
        filePath: string;
        digest: string;
      }) => Promise<RenderedEntry | undefined>)
    | undefined
  >;
  contentModuleTypes?: string;
}

type LoaderContextWithEntryTypes = LoaderContext & {
  entryTypes: Map<string, ContentEntryType>;
};

export function localMdxLoader(base: string): Loader {
  return {
    name: 'local-mdx-loader',
    async load(loaderContext) {
      const context = loaderContext as LoaderContextWithEntryTypes;
      const baseDirectory = resolve(base);
      const files = (await readdir(baseDirectory, { withFileTypes: true }))
        .filter((entry) => entry.isFile() && ['.md', '.mdx'].includes(extname(entry.name)))
        .map((entry) => entry.name)
        .sort();

      context.store.clear();
      const renderers = new Map<
        ContentEntryType,
        Awaited<ReturnType<NonNullable<ContentEntryType['getRenderFunction']>>>
      >();

      for (const file of files) {
        const extension = extname(file);
        const entryType = context.entryTypes.get(extension);
        if (!entryType) {
          context.logger.warn(`No Astro content entry type registered for ${extension}`);
          continue;
        }

        const absolutePath = join(baseDirectory, file);
        const contents = await readFile(absolutePath, 'utf8');
        const { body, data } = await entryType.getEntryInfo({
          contents,
          fileUrl: pathToFileURL(absolutePath),
        });
        const id = basename(file, extension);
        const parsedData = await context.parseData({ id, data, filePath: absolutePath });
        const digest = context.generateDigest(contents);
        let render = renderers.get(entryType);

        if (!renderers.has(entryType) && entryType.getRenderFunction) {
          render = await entryType.getRenderFunction(context.config);
          renderers.set(entryType, render);
        }

        const filePath = relative(fileURLToPath(context.config.root), absolutePath).replaceAll(
          '\\',
          '/',
        );

        if (entryType.getRenderFunction) {
          const rendered = await render?.({
            id,
            data,
            body,
            filePath: absolutePath,
            digest,
          });
          context.store.set({
            id,
            data: parsedData,
            body,
            filePath,
            digest,
            rendered,
            assetImports: rendered?.metadata?.imagePaths,
          });
        } else if (entryType.contentModuleTypes) {
          context.store.set({
            id,
            data: parsedData,
            body,
            filePath,
            digest,
            deferredRender: true,
          });
        } else {
          context.store.set({ id, data: parsedData, body, filePath, digest });
        }
      }

      context.watcher?.add(baseDirectory);
    },
  };
}
