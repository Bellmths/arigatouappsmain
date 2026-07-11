// SEO用のタイトル辞書。個別LPの <title> はブランド名だけだと弱いため、
// 「狙うキーワード＋プロダクト名」を先頭に置く（BaseLayout が " | ArigatouApps" を付与）。
// キーワードは各アプリの機能から設計した初期案。実検索volに合わせて調整可。
import type { Loc } from "../i18n";

/** サイト全体（トップページ）の <title> 本体 */
export const siteSeoTitle: Loc = {
  ja: "ArigatouApps — 個人開発の Android アプリ & Web ツール",
  en: "ArigatouApps — Indie Android Apps & Web Tools",
};

/** アプリごとの <title> 本体（キーワード先頭・プロダクト名を含む） */
export const appSeoTitle: Record<string, Loc> = {
  timeaware: {
    ja: "ダムフォン化ランチャー TimeAware",
    en: "TimeAware — Dumbphone Launcher",
  },
  dotcityclock: {
    ja: "ピクセルデジタル時計 DotCityClock",
    en: "DotCityClock — Pixel Digital Clock",
  },
  kalco: {
    ja: "24を作る数字パズル KALCO",
    en: "KALCO — Make-24 Number Puzzle",
  },
  progressdot: {
    ja: "進捗ドットウィジェット ProgressDot",
    en: "ProgressDot — Progress Dot Widget",
  },
  linkremind: {
    ja: "あとで読むURL保存＆リマインド LinkRemind",
    en: "LinkRemind — Save & Remind URLs",
  },
  subminder: {
    ja: "サブスク管理アプリ SubMinder",
    en: "SubMinder — Subscription Manager",
  },
  notikeeper: {
    ja: "通知履歴を保存 Notikeeper",
    en: "Notikeeper — Notification History",
  },
  appclock: {
    ja: "アプリ使用時間トラッカー AppClock",
    en: "AppClock — App Usage Tracker",
  },
  "vizfy-android": {
    ja: "音楽ビジュアライザ Vizfy",
    en: "Vizfy — Music Visualizer",
  },
  qrwidget: {
    ja: "QRコード ホーム画面ウィジェット QR Widget",
    en: "QR Widget — QR Code Home Widget",
  },
  onemotion: {
    ja: "ジェスチャーランチャー OneMotion",
    en: "OneMotion — Gesture Launcher",
  },
  qrscanner: {
    ja: "AIで安全判定 QR/URL スキャナー",
    en: "QR/URL AI Scanner — Safe Link Check",
  },
  watchlog: {
    ja: "YouTube視聴時間トラッカー WatchLog",
    en: "WatchLog — YouTube Time Tracker",
  },
  skipbook: {
    ja: "節約を記録する家計アプリ SkipBook",
    en: "SkipBook — Save-Money Tracker",
  },
};
