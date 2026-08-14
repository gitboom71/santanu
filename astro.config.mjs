// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Astro uses 'site' to construct absolute URLs in your sitemap
  site: 'https://santanumukherjee.vercel.app', 
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
});