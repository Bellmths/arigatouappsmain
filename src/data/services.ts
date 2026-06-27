// Webサービス（サブドメインで公開しているもの）。
// 新しいサービスが増えたら、このリストに1ブロック足すだけでトップ・フッターに反映される。

export type ServiceStatus = "live" | "wip" | "coming";

export interface Service {
  id: string;
  name: string;
  desc: string;
  url: string;
  status: ServiceStatus;
  /** ボタン文言（例: 外部リンク / 下の一覧へ） */
  cta?: string;
  /** カードのアクセント色（CSS変数名 --c-xxx の xxx 部分） */
  accent?: string;
}

export const services: Service[] = [
  {
    id: "kabu",
    name: "株式ツール",
    desc: "ファンダメンタルズ × 株価を1画面で見るビューア。",
    url: "https://kabu.arigatouapps.com",
    status: "live",
    cta: "外部リンク",
    accent: "mint",
  },
  {
    id: "vizfy-web",
    name: "Vizfy",
    desc: "Last.fm の聴取データをツリーマップで可視化。Android 版もあります。",
    url: "https://vizfy.arigatouapps.com",
    status: "live",
    cta: "外部リンク",
    accent: "pink",
  },
];
