import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE ?? "https://plaza-il.com",
  output: "static",
  integrations: [sitemap()],
});
