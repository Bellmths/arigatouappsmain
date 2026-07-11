import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// メインサイトの本番URL。ドメイン確定後にここを書き換える。
export default defineConfig({
  site: "https://arigatouapps.com",
  output: "hybrid",
  adapter: cloudflare(),
  // Cloudflare は末尾スラッシュURL(/apps/x/)で配信するため、生成リンク・canonical も揃える。
  trailingSlash: "always",
  // サイトマップ（全URLを列挙）。各ページの <head> に hreflang link を出しているため、
  // 言語の相互リンクはそちらで検索エンジンに伝わる。
  // ※ sitemap の i18n オプションは現行バージョンで build エラー(reduce undefined)になるため未使用。
  integrations: [sitemap()],
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