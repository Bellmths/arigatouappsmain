import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// メインサイトの本番URL。ドメイン確定後にここを書き換える。
export default defineConfig({
  site: "https://arigatouapps.com",
  output: "hybrid",
  adapter: cloudflare(),
  // 多言語ルーティング。日本語はルート(/)、英語は /en/ で配信する。
  // prefixDefaultLocale: false → デフォルト言語(ja)にはURLプレフィックスを付けない。
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});