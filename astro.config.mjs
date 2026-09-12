import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://progenebio.net (placeholder domain)
export default defineConfig({
  site: 'https://progenebio.net',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
