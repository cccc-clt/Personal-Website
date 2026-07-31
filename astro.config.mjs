import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import swup from '@swup/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { env } from 'node:process';

const site = env.SITE_URL || undefined;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/game': '/research/?category=game-research',
    '/moments': '/research/?category=learning-notes',
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
    ...(site ? [sitemap()] : []),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
    },
  },
});
