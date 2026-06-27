// サイト全体の基本設定。テキストは将来の英語対応に備えてここに寄せておく。
export const site = {
  name: "ArigatouApps",
  tagline: "小さく作って、ちゃんと届ける。",
  description:
    "個人の趣味で、Android アプリと web ツールを作っています。ArigatouApps が作ったプロダクトをまとめたポータルです。",
  url: "https://arigatouapps.com",
  email: "hello@arigatouapps.com",
  // 外部リンク（空文字なら非表示）
  links: {
    blog: "https://blog.arigatouapps.com", // 将来の自作キーボードブログ
  },
} as const;
