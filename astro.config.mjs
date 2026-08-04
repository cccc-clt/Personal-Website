import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import swup from '@swup/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { env } from 'node:process';
import { URL } from 'node:url';

const site = env.SITE_URL || undefined;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/game': '/insights/?category=game-research',
    '/moments': '/insights/?type=ai-product-note',
    '/notes/generation-is-not-ai-product': '/research/generation-is-not-ai-product/',
    '/notes/best-model-is-not-best-product-model':
      '/research/best-model-is-not-best-product-model/',
    '/agent': '/projects/?filter=agent',
    '/auto': '/projects/automate-ai-car-copilot/',
  },
  integrations: [
    mdx(),
    swup({
      theme: false,
      animationClass: 'transition-swup-',
      containers: ['#swup-container'],
      smoothScrolling: false,
      cache: true,
      preload: false,
      accessibility: true,
      updateHead: true,
      globalInstance: true,
    }),
    ...(site
      ? [
          sitemap({
            filter: (page) => !/^\/insights\/[^/]+\/pdf\/$/.test(new URL(page).pathname),
          }),
        ]
      : []),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
    },
  },
});
