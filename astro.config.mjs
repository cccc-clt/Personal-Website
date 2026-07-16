import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
