// Androidアプリ一覧。開発者ページ(arigatouapps)の14本。
// 説明文はアプリ名から起こした暫定文。実際のストア文言に合わせて微調整してください。
// playUrl は https://play.google.com/store/apps/details?id=<packageId> 形式。

export type AppStatus = "live" | "wip" | "coming";

export interface AndroidApp {
  id: string;
  name: string;
  desc: string;
  status: AppStatus;
  /** Androidパッケージ名（playUrl生成・構造化データに利用） */
  packageId: string;
  /** ざっくり分類（表示・構造化データ用） */
  category: string;
  /** アイコン画像パス（/public/apps/xxx.png）。未指定なら絵文字。 */
  icon?: string;
  emoji?: string;
  /** トップで大きく扱う注目アプリ */
  featured?: boolean;
  /** 注目アプリの特徴（featured時のみ表示） */
  features?: string[];
}

const play = (id: string) =>
  `https://play.google.com/store/apps/details?id=${id}`;

const raw: Omit<AndroidApp, "playUrl">[] = [
  {
    id: "timeaware",
    name: "TimeAware – Dumbphone Launcher",
    desc: "スマホを“ダムフォン”のように最小化し、スクリーンタイムも確認できるシンプルなホームランチャー。",
    status: "live",
    packageId: "com.arigatouapps.zenlauncher",
    category: "ランチャー",
    emoji: "🧘",
    featured: true,
    features: [
      "アプリを絞ったミニマルなホーム画面。ダムフォン（ガラケー）のような割り切り。",
      "スクリーンタイム（使用時間）をホーム画面でひと目で確認。",
      "オフラインで完結。アカウント登録は不要。",
    ],
  },
  {
    id: "dotcityclock",
    name: "DotCityClock – Pixel Clock",
    desc: "ドット絵風のピクセルデジタル時計を表示する時計アプリ。",
    status: "live",
    packageId: "com.arigatouapps.dotcityclock",
    category: "時計",
    emoji: "🕹️",
  },
  {
    id: "kalco",
    name: "KALCO – 24 Game Number Puzzle",
    desc: "4つの数字を計算して24を作る、頭を使う数字パズルゲーム。",
    status: "live",
    packageId: "com.arigatouapps.krypto_math_puzzle",
    category: "パズル",
    emoji: "🧮",
  },
  {
    id: "progressdot",
    name: "ProgressDot",
    desc: "1日・1年などの進捗をドットで可視化するウィジェット。",
    status: "live",
    packageId: "com.arigatouapps.progressdot",
    category: "ウィジェット",
    emoji: "⏳",
  },
  {
    id: "linkremind",
    name: "LinkRemind",
    desc: "後で読みたいURLを保存し、リマインドしてくれるアプリ。",
    status: "live",
    packageId: "com.arigatouapps.url_reminder",
    category: "生産性",
    emoji: "🔖",
  },
  {
    id: "subminder",
    name: "SubMinder",
    desc: "サブスクの支払い日と料金を管理し、更新前に通知する。",
    status: "live",
    packageId: "com.arigatouapps.subminder",
    category: "生産性",
    emoji: "💳",
  },
  {
    id: "notikeeper",
    name: "Notikeeper",
    desc: "消えてしまう通知を保存・整理して後から見返せるアプリ。",
    status: "live",
    packageId: "com.arigatouapps.notikeeper",
    category: "生産性",
    emoji: "🔔",
  },
  {
    id: "appclock",
    name: "AppClock",
    desc: "アプリの使用時間を計測し、使いすぎを通知してくれる。",
    status: "live",
    packageId: "com.arigatouapps.app_usage_notifier",
    category: "ユーティリティ",
    emoji: "⏱️",
  },
  {
    id: "vizfy-android",
    name: "Vizfy – Visualize Your Music",
    desc: "再生中の音楽をリアルタイムにビジュアライズするアプリ（Android版）。",
    status: "live",
    packageId: "com.arigatouapps.vizfy",
    category: "音楽",
    emoji: "🎵",
  },
  {
    id: "qrwidget",
    name: "QR Widget",
    desc: "よく使うQRコードをホーム画面ウィジェットからすぐ表示。",
    status: "live",
    packageId: "com.arigatouapps.qrwidget",
    category: "ウィジェット",
    emoji: "🔳",
  },
  {
    id: "onemotion",
    name: "OneMotion Launcher",
    desc: "ジェスチャー中心で素早く操作できるミニマルなランチャー。",
    status: "live",
    packageId: "com.arigatouapps.onemotionlauncher",
    category: "ランチャー",
    emoji: "👆",
  },
  {
    id: "qrscanner",
    name: "QR/URL AI Scanner",
    desc: "QRコードやURLの安全性をAIで判定する安心スキャナー。",
    status: "live",
    packageId: "com.arigatouapps.qrurlsafescan2",
    category: "ユーティリティ",
    emoji: "🛡️",
  },
  {
    id: "watchlog",
    name: "WatchLog – YouTube Tracker",
    desc: "YouTubeの視聴履歴を記録し、見た時間を振り返れるトラッカー。",
    status: "live",
    packageId: "com.arigatouapps.watchlog",
    category: "トラッキング",
    emoji: "📺",
  },
  {
    id: "skipbook",
    name: "SkipBook – Save Money",
    desc: "我慢してやめた出費を記録し、節約額を可視化する家計アプリ。",
    status: "live",
    packageId: "com.arigatouapps.skipbook2",
    category: "家計簿",
    emoji: "🐷",
  },
];

export interface AndroidAppWithUrl extends AndroidApp {
  playUrl: string;
}

export const apps: AndroidAppWithUrl[] = raw.map((a) => ({
  ...a,
  playUrl: play(a.packageId),
}));

/** 開発者ページ全体へのリンク */
export const developerUrl =
  "https://play.google.com/store/apps/developer?id=artigatou";
