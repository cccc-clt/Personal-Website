import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET(context) {
  if (!context.site) {
    return new globalThis.Response(null, { status: 204 });
  }

  const projects = (await getCollection('projects')).sort(
    (a, b) => b.data.updated.valueOf() - a.data.updated.valueOf(),
  );
  return rss({
    title: siteConfig.siteName,
    description: siteConfig.description,
    site: context.site,
    items: projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      pubDate: project.data.updated,
      link: `/projects/${project.id.replace(/\.mdx?$/, '')}/`,
      categories: project.data.categories,
    })),
    customData: '<language>zh-CN</language>',
  });
}
