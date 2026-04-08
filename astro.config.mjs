import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import bradDevTheme from "./src/styles/brad-dev-theme.json";

export default defineConfig({
  integrations: [mdx()],
  adapter: cloudflare(),
  output: "hybrid", // or 'hybrid' if you want static + SSR
  markdown: {
    shikiConfig: {
      theme: bradDevTheme,
      wrap: false,
    },
  },
});
