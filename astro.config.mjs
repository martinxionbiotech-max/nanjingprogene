import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://nanjingprogene.com (placeholder domain)
export default defineConfig({
  site: 'https://nanjingprogene.com',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
