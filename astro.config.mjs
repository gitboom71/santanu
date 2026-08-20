// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath, URL } from 'node:url';

// https://astro.build/config
export default defineConfig({
  // Astro uses 'site' to construct absolute URLs in your sitemap
  site: 'https://santanumukherjee.vercel.app', 
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      },
    },
    build: {
      cssMinify: 'esbuild',
    },
  },
});