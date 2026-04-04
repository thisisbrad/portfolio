import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import bradDevTheme from './src/styles/brad-dev-theme.json';

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: bradDevTheme,
      wrap: false,
    },
  },
});
