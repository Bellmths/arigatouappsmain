import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// メインサイトの本番URL。ドメイン確定後にここを書き換える。
export default defineConfig({
  site: "https://arigatouapps.com",
  output: "hybrid",
  adapter: cloudflare()
});