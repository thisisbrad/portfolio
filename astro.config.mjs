import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import bradDevTheme from "./src/styles/brad-dev-theme.json";

export default defineConfig({
  site: 'https://thisisbrad.dev',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
  output: "static", // or 'hybrid' if you want static + SSR
  markdown: {
    shikiConfig: {
      theme: bradDevTheme,
      wrap: false,
    },
  },
});
