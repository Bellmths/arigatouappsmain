// サイト全体の基本設定。多言語のテキストは Loc（{ja, en}）で持つ。
import type { Loc } from "../i18n";

export const site = {
  name: "ArigatouApps",
  tagline: {
    ja: "小さく作って、ちゃんと届ける。",
    en: "Build small, ship well.",
  } as Loc,
  description: {
    ja: "個人の趣味で、Android アプリと web ツールを作っています。ArigatouApps が作ったプロダクトをまとめたポータルです。",
    en: "A personal studio building Android apps and web tools — a portal that gathers everything ArigatouApps has made.",
  } as Loc,
  url: "https://arigatouapps.com",
  email: "hello@arigatouapps.com",
  // 外部リンク（空文字なら非表示）。ブログを始めるときは blog を追加し、
  // BaseLayout のフッターに <a href={site.links.blog}>blog</a> を戻す。
  links: {} as { blog?: string },
} as const;
