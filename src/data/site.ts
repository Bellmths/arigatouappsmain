// サイト全体の基本設定。テキストは将来の英語対応に備えてここに寄せておく。
export const site = {
  name: "ArigatouApps",
  tagline: "小さく作って、ちゃんと届ける。",
  description:
    "個人の趣味で、Android アプリと web ツールを作っています。ArigatouApps が作ったプロダクトをまとめたポータルです。",
  url: "https://arigatouapps.com",
  email: "hello@arigatouapps.com",
  // 外部リンク（空文字なら非表示）。ブログを始めるときは blog を追加し、
  // BaseLayout のフッターに <a href={site.links.blog}>blog</a> を戻す。
  links: {} as { blog?: string },
} as const;
