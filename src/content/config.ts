// ブログ記事のコンテンツコレクション定義。
// ファイルは <slug>.<lang>.md 形式。frontmatter の slug で日英を対応づける。
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** 翻訳を対応づける共通キー（URL にも使う）。※ slug は Astro 予約語のため key を使う。 */
    key: z.string(),
    lang: z.enum(["ja", "en"]),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
