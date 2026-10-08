// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
  base: '/site/',
  site: 'https://amarirfan.github.io/site/',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(new URL('.', import.meta.url).pathname, 'src')
      }
    }
  }
});