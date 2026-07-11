// Androidアプリ一覧。開発者ページ(arigatouapps)の14本。
// 説明文・特徴はアプリ機能から起こした暫定文。実際のストア文言に合わせて微調整してください。
// playUrl は https://play.google.com/store/apps/details?id=<packageId> 形式。
// desc / category / features は Loc（{ja, en}）で持ち、言語に応じて出し分ける。
// name は固有のプロダクト名なので共通（翻訳しない）。
import type { Loc, LocList } from "../i18n";

export type AppStatus = "live" | "wip" | "coming";

export interface AndroidApp {
  id: string;
  name: string;
  desc: Loc;
  status: AppStatus;
  /** Androidパッケージ名（playUrl生成・構造化データに利用） */
  packageId: string;
  /** ざっくり分類（表示・構造化データ用） */
  category: Loc;
  /** アイコン画像パス（/public/apps/xxx.png）。未指定なら絵文字。 */
  icon?: string;
  emoji?: string;
  /** トップで大きく扱う注目アプリ */
  featured?: boolean;
  /** 個別LPのアクセント色（CSS変数 --c-xxx の xxx 部分） */
  accent?: string;
  /** 特徴3点（個別LPに表示）。 */
  features?: LocList;
  /** 旗艦アプリの没入デザインデモ（/public 配下の静的HTMLパス）。 */
  demo?: string;
}

const play = (id: string) =>
  `https://play.google.com/store/apps/details?id=${id}`;

const raw: Omit<AndroidApp, "playUrl">[] = [
  {
    id: "timeaware",
    name: "TimeAware – Dumbphone Launcher",
    desc: {
      ja: "スマホを“ダムフォン”のように最小化し、スクリーンタイムも確認できるシンプルなホームランチャー。",
      en: "A simple home launcher that strips your phone down to a “dumbphone” and shows your screen time.",
    },
    status: "live",
    packageId: "com.arigatouapps.zenlauncher",
    category: { ja: "ランチャー", en: "Launcher" },
    emoji: "🧘",
    featured: true,
    accent: "lime",
    demo: "/demo/timeaware.html",
    features: {
      ja: [
        "アプリを絞ったミニマルなホーム画面。ダムフォン（ガラケー）のような割り切り。",
        "スクリーンタイム（使用時間）をホーム画面でひと目で確認。",
        "オフラインで完結。アカウント登録は不要。",
      ],
      en: [
        "A minimal home screen with only the apps you need — the deliberate simplicity of a dumbphone.",
        "See your screen time at a glance, right on the home screen.",
        "Works fully offline. No account required.",
      ],
    },
  },
  {
    id: "dotcityclock",
    name: "DotCityClock – Pixel Clock",
    desc: {
      ja: "ドット絵風のピクセルデジタル時計を表示する時計アプリ。",
      en: "A clock app that shows a pixel-art style digital clock.",
    },
    status: "live",
    packageId: "com.arigatouapps.dotcityclock",
    category: { ja: "時計", en: "Clock" },
    emoji: "🕹️",
    accent: "purple",
    demo: "/demo/dotcityclock.html",
    features: {
      ja: [
        "5×7ドットで描く、レトロなピクセル時計。",
        "琥珀・シアンなどCRT調のカラーを選べる。",
        "ホーム画面ウィジェットとして常駐。",
      ],
      en: [
        "A retro pixel clock drawn from a 5×7 dot grid.",
        "Choose CRT-style colors like amber and cyan.",
        "Lives on your home screen as a widget.",
      ],
    },
  },
  {
    id: "kalco",
    name: "KALCO – 24 Game Number Puzzle",
    desc: {
      ja: "4つの数字を計算して24を作る、頭を使う数字パズルゲーム。",
      en: "A brain-teasing number puzzle where you combine four numbers to make 24.",
    },
    status: "live",
    packageId: "com.arigatouapps.krypto_math_puzzle",
    category: { ja: "パズル", en: "Puzzle" },
    emoji: "🧮",
    accent: "yellow",
    features: {
      ja: [
        "4つの数字で24を作る、シンプルな計算パズル。",
        "やさしい問題から歯ごたえのある難問まで。",
        "スキマ時間にちょうどいい頭の体操。",
      ],
      en: [
        "A simple math puzzle: make 24 from four numbers.",
        "From gentle starts to genuinely tricky boards.",
        "A quick brain workout for spare moments.",
      ],
    },
  },
  {
    id: "progressdot",
    name: "ProgressDot",
    desc: {
      ja: "1日・1年などの進捗をドットで可視化するウィジェット。",
      en: "A widget that visualizes the progress of your day or year as dots.",
    },
    status: "live",
    packageId: "com.arigatouapps.progressdot",
    category: { ja: "ウィジェット", en: "Widget" },
    emoji: "⏳",
    accent: "cyan",
    features: {
      ja: [
        "1日・1年の進捗をドットで可視化。",
        "残り時間がひと目でわかるウィジェット。",
        "シンプルで気が散らないデザイン。",
      ],
      en: [
        "Visualize the progress of your day or year as dots.",
        "See the time remaining at a glance, on your home screen.",
        "Simple and distraction-free.",
      ],
    },
  },
  {
    id: "linkremind",
    name: "LinkRemind",
    desc: {
      ja: "後で読みたいURLを保存し、リマインドしてくれるアプリ。",
      en: "An app that saves URLs to read later and reminds you about them.",
    },
    status: "live",
    packageId: "com.arigatouapps.url_reminder",
    category: { ja: "生産性", en: "Productivity" },
    emoji: "🔖",
    accent: "blue",
    features: {
      ja: [
        "後で読みたいURLをさっと保存。",
        "忘れないように、リマインドで通知。",
        "たまったリンクをすっきり整理。",
      ],
      en: [
        "Save URLs to read later in a tap.",
        "Get reminded so you never forget them.",
        "Keep your saved links tidy.",
      ],
    },
  },
  {
    id: "subminder",
    name: "SubMinder",
    desc: {
      ja: "サブスクの支払い日と料金を管理し、更新前に通知する。",
      en: "Manage subscription due dates and costs, and get notified before renewals.",
    },
    status: "live",
    packageId: "com.arigatouapps.subminder",
    category: { ja: "生産性", en: "Productivity" },
    emoji: "💳",
    accent: "green",
    features: {
      ja: [
        "サブスクの料金と支払日を一元管理。",
        "更新前に通知して、うっかり課金を防止。",
        "月額・年額の合計をひと目で把握。",
      ],
      en: [
        "Track every subscription's cost and due date in one place.",
        "Get notified before renewals to avoid surprise charges.",
        "See your monthly and yearly totals at a glance.",
      ],
    },
  },
  {
    id: "notikeeper",
    name: "Notikeeper",
    desc: {
      ja: "消えてしまう通知を保存・整理して後から見返せるアプリ。",
      en: "An app that saves and organizes fleeting notifications so you can review them later.",
    },
    status: "live",
    packageId: "com.arigatouapps.notikeeper",
    category: { ja: "生産性", en: "Productivity" },
    emoji: "🔔",
    accent: "pink",
    features: {
      ja: [
        "消えてしまった通知を保存して後から確認。",
        "アプリごとに整理して見返せる。",
        "大事なお知らせを取りこぼさない。",
      ],
      en: [
        "Save dismissed notifications to review later.",
        "Organize and browse them by app.",
        "Never lose an important alert again.",
      ],
    },
  },
  {
    id: "appclock",
    name: "AppClock",
    desc: {
      ja: "アプリの使用時間を計測し、使いすぎを通知してくれる。",
      en: "Tracks how long you use each app and warns you when you overuse them.",
    },
    status: "live",
    packageId: "com.arigatouapps.app_usage_notifier",
    category: { ja: "ユーティリティ", en: "Utility" },
    emoji: "⏱️",
    accent: "mint",
    features: {
      ja: [
        "アプリごとの使用時間を計測。",
        "使いすぎを、通知でそっとお知らせ。",
        "スマホ時間を見直すきっかけに。",
      ],
      en: [
        "Track how long you spend in each app.",
        "A gentle nudge when you overuse one.",
        "A prompt to rethink your screen time.",
      ],
    },
  },
  {
    id: "vizfy-android",
    name: "Vizfy – Visualize Your Music",
    desc: {
      ja: "再生中の音楽をリアルタイムにビジュアライズするアプリ（Android版）。",
      en: "An app that visualizes the music you are playing in real time (Android version).",
    },
    status: "live",
    packageId: "com.arigatouapps.vizfy",
    category: { ja: "音楽", en: "Music" },
    emoji: "🎵",
    accent: "purple",
    demo: "/demo/vizfy.html",
    features: {
      ja: [
        "再生中の音楽をリアルタイムに可視化。",
        "Last.fm の履歴をツリーマップで表示。",
        "Web版と同じ体験をポケットに。",
      ],
      en: [
        "Visualize the music you're playing in real time.",
        "See your Last.fm history as a treemap.",
        "The web experience, now in your pocket.",
      ],
    },
  },
  {
    id: "qrwidget",
    name: "QR Widget",
    desc: {
      ja: "よく使うQRコードをホーム画面ウィジェットからすぐ表示。",
      en: "Instantly show your frequently used QR codes from a home screen widget.",
    },
    status: "live",
    packageId: "com.arigatouapps.qrwidget",
    category: { ja: "ウィジェット", en: "Widget" },
    emoji: "🔳",
    accent: "blue",
    features: {
      ja: [
        "よく使うQRを、ホーム画面にウィジェット化。",
        "タップせず、置くだけですぐ表示。",
        "Wi-Fiや連絡先の共有がスムーズに。",
      ],
      en: [
        "Turn your go-to QR codes into home-screen widgets.",
        "Shown instantly — no tapping to open.",
        "Share Wi-Fi or contacts smoothly.",
      ],
    },
  },
  {
    id: "onemotion",
    name: "OneMotion Launcher",
    desc: {
      ja: "ジェスチャー中心で素早く操作できるミニマルなランチャー。",
      en: "A minimal launcher centered on gestures for fast, one-motion control.",
    },
    status: "live",
    packageId: "com.arigatouapps.onemotionlauncher",
    category: { ja: "ランチャー", en: "Launcher" },
    emoji: "👆",
    accent: "mint",
    features: {
      ja: [
        "ジェスチャー中心の、素早い操作。",
        "無駄を削ぎ落としたミニマルなホーム。",
        "片手でも快適に使える設計。",
      ],
      en: [
        "Fast, gesture-first control.",
        "A minimal home with the clutter stripped away.",
        "Comfortable even one-handed.",
      ],
    },
  },
  {
    id: "qrscanner",
    name: "QR/URL AI Scanner",
    desc: {
      ja: "QRコードやURLの安全性をAIで判定する安心スキャナー。",
      en: "A reassuring scanner that uses AI to judge the safety of QR codes and URLs.",
    },
    status: "live",
    packageId: "com.arigatouapps.qrurlsafescan2",
    category: { ja: "ユーティリティ", en: "Utility" },
    emoji: "🛡️",
    accent: "green",
    features: {
      ja: [
        "QRやURLの安全性を、AIで判定。",
        "怪しいリンクを開く前に警告。",
        "安心してスキャンできる。",
      ],
      en: [
        "AI checks the safety of QR codes and URLs.",
        "Warns you before you open a risky link.",
        "Scan with peace of mind.",
      ],
    },
  },
  {
    id: "watchlog",
    name: "WatchLog – YouTube Tracker",
    desc: {
      ja: "YouTubeの視聴履歴を記録し、見た時間を振り返れるトラッカー。",
      en: "A tracker that logs your YouTube history so you can review how much time you spent watching.",
    },
    status: "live",
    packageId: "com.arigatouapps.watchlog",
    category: { ja: "トラッキング", en: "Tracking" },
    emoji: "📺",
    accent: "pink",
    features: {
      ja: [
        "YouTubeの視聴履歴を記録。",
        "見た時間を振り返って可視化。",
        "だらだら視聴を見直すきっかけに。",
      ],
      en: [
        "Log your YouTube watch history.",
        "Look back on how much time you spent.",
        "A nudge to rein in the endless scroll.",
      ],
    },
  },
  {
    id: "skipbook",
    name: "SkipBook – Save Money",
    desc: {
      ja: "我慢してやめた出費を記録し、節約額を可視化する家計アプリ。",
      en: "A budgeting app that logs the purchases you resisted and visualizes how much you saved.",
    },
    status: "live",
    packageId: "com.arigatouapps.skipbook2",
    category: { ja: "家計簿", en: "Budgeting" },
    emoji: "🐷",
    accent: "yellow",
    features: {
      ja: [
        "我慢してやめた出費を記録する家計アプリ。",
        "節約できた金額を可視化。",
        "小さな我慢が積み上がる達成感。",
      ],
      en: [
        "A budgeting app that logs the buys you skipped.",
        "Visualize how much you've saved.",
        "Watch small acts of restraint add up.",
      ],
    },
  },
];

export interface AndroidAppWithUrl extends AndroidApp {
  playUrl: string;
}

export const apps: AndroidAppWithUrl[] = raw.map((a) => ({
  ...a,
  // public/apps/<id>.png（Playストアから取得した512pxアイコン）を自動参照。
  // 差し替えたい場合は raw 側で icon を明示するか、ファイルを置き換える。
  icon: a.icon ?? `/apps/${a.id}.png`,
  playUrl: play(a.packageId),
}));

/** 開発者ページ全体へのリンク */
export const developerUrl =
  "https://play.google.com/store/apps/developer?id=artigatou";
