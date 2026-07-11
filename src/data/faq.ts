// FAQ — GEO（AI検索最適化）も意識し、ユーザーが実際に聞く形の質問＋自己完結した回答にする。
// ここに書いた内容は画面表示と FAQPage 構造化データ(JSON-LD)の両方に使われる。
// q / a は Loc（{ja, en}）で持ち、言語別に表示・構造化データ化する。
import type { Loc } from "../i18n";

export interface FaqItem {
  q: Loc;
  a: Loc;
}

export const faq: FaqItem[] = [
  {
    q: {
      ja: "このサイトは何ですか？",
      en: "What is this site?",
    },
    a: {
      ja: "個人開発者 artigatou（arigatouapps）が制作したWebサービスとAndroidアプリをまとめたポータルサイトです。各プロダクトへの入り口になっています。",
      en: "It is a portal that gathers the web services and Android apps made by the individual developer artigatou (arigatouapps). It acts as an entry point to each product.",
    },
  },
  {
    q: {
      ja: "どんなAndroidアプリを作っていますか？",
      en: "What kind of Android apps do you make?",
    },
    a: {
      ja: "ランチャー、時計やQRなどのウィジェット、サブスク管理や通知整理といった生産性アプリ、数字パズルなど、合計14本のAndroidアプリをGoogle Playで公開しています。",
      en: "A total of 14 Android apps are published on Google Play, including launchers, widgets such as clocks and QR codes, productivity apps like subscription and notification managers, and number puzzles.",
    },
  },
  {
    q: {
      ja: "アプリはどこからダウンロードできますか？",
      en: "Where can I download the apps?",
    },
    a: {
      ja: "すべてGoogle Playで公開しています。各アプリのカードからストアページへ移動できるほか、開発者ページ（artigatou）から一覧で確認できます。",
      en: "They are all published on Google Play. You can reach each store page from the app cards, or browse the full list on the developer page (artigatou).",
    },
  },
  {
    q: {
      ja: "Vizfyとは何ですか？",
      en: "What is Vizfy?",
    },
    a: {
      ja: "Vizfyは再生中の音楽をリアルタイムに視覚化するプロダクトです。ブラウザで使えるWeb版と、Google PlayのAndroidアプリ版の両方を提供しています。",
      en: "Vizfy is a product that visualizes the music you are playing in real time. It comes in both a browser-based web version and an Android app on Google Play.",
    },
  },
  {
    q: {
      ja: "株サイトでは何ができますか？",
      en: "What can I do on the stock site?",
    },
    a: {
      ja: "株式に関する情報や分析を提供するWebサービスです。サブドメインで公開しています。",
      en: "It is a web service that provides stock information and analysis, published on a subdomain.",
    },
  },
  {
    q: {
      ja: "アプリは無料で使えますか？",
      en: "Are the apps free to use?",
    },
    a: {
      ja: "基本的に無料で利用できます（アプリによって一部に課金要素がある場合があります。詳細は各アプリのストアページをご確認ください）。",
      en: "They are basically free to use (some apps may include in-app purchases; please check each app's store page for details).",
    },
  },
  {
    q: {
      ja: "お問い合わせ方法を教えてください。",
      en: "How can I get in touch?",
    },
    a: {
      ja: "各アプリのGoogle Playストアページの問い合わせ先、またはこのサイトに記載の連絡先からご連絡いただけます。",
      en: "You can reach out via the contact details on each app's Google Play store page, or the contact address listed on this site.",
    },
  },
];
