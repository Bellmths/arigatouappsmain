// Webサービス（サブドメインで公開しているもの）。
// 新しいサービスが増えたら、このリストに1ブロック足すだけでトップ・フッターに反映される。
// 表示テキスト（name / desc）は Loc（{ja, en}）で持ち、言語に応じて出し分ける。
import type { Loc } from "../i18n";

export type ServiceStatus = "live" | "wip" | "coming";

export interface Service {
  id: string;
  name: Loc;
  desc: Loc;
  url: string;
  status: ServiceStatus;
  /** カードのアクセント色（CSS変数名 --c-xxx の xxx 部分） */
  accent?: string;
}

export const services: Service[] = [
  {
    id: "kabu",
    name: { ja: "株式ツール", en: "Stock Viewer" },
    desc: {
      ja: "ファンダメンタルズ × 株価を1画面で見るビューア。",
      en: "View fundamentals and stock prices together on a single screen.",
    },
    url: "https://stocks.arigatouapps.com",
    status: "live",
    accent: "mint",
  },
  {
    id: "vizfy-web",
    name: { ja: "Vizfy", en: "Vizfy" },
    desc: {
      ja: "Last.fm の聴取データをツリーマップで可視化。Android 版もあります。",
      en: "Visualize your Last.fm listening data as a treemap. An Android version is also available.",
    },
    url: "https://vizfy.arigatouapps.com",
    status: "live",
    accent: "pink",
  },
];
