// 画面の固定UI文言（見出し・ボタン等）。データ由来でないテキストはすべてここに集約する。
// mono体で表示する小さなラベル（projects / apps / faq など）はデザイン上の意匠なので
// 両言語で共通のまま残し、日本語文の見出し・本文だけ翻訳する。
import type { Lang } from ".";

export const ui = {
  ja: {
    "nav.projects": "projects",
    "nav.apps": "apps",
    "nav.faq": "faq",
    "nav.about": "about",
    "lang.switch": "EN",
    "lang.label": "日本語",

    "hero.eyebrow": "arigatouapps · personal studio",
    "hero.ctaPrimary": "作ったものを見る",
    "hero.ctaSecondary": "アプリ一覧",

    "projects.eyebrow": "projects",
    "projects.title": "つくっているもの",
    "projects.android.title": "Android アプリ",
    "projects.android.desc": "TimeAware / WatchLog / QR Widget など、日常を少し便利にする小品。",
    "projects.android.cta": "下の一覧へ ↓",

    "apps.eyebrow": "apps · android",
    "apps.title": "Android アプリ",
    "apps.count": "on google play",
    "apps.more": "Google Play の開発者ページで見る →",
    "apps.featured": "★ featured · android",
    "apps.getOnPlay": "Google Play で手に入れよう",

    "faq.eyebrow": "faq",
    "faq.title": "よくある質問",

    "about.eyebrow": "about",
    "about.title": "ArigatouApps について",
    "about.body":
      "個人の趣味で Android アプリと web ツールを作っています。「小さく作って、ちゃんと届ける」をモットーに、日常を少し便利にする小品を公開しています。",
    "about.contact": "お問い合わせ",
    "about.googlePlay": "Google Play",

    "cta.external": "外部リンク",
    "cta.view": "見る",

    "app.home": "ホーム",
    "app.apps": "アプリ",
    "app.get": "Google Play で入手",
    "app.featTitle": "できること",
    "app.features": "特徴",
    "app.screens": "スクリーンショット",
    "app.related": "ほかのアプリ",
    "app.allApps": "すべてのアプリ",
    "app.demo": "テーマを見る",
    "app.demoNote": "没入型のデザインデモを別ページで開きます",
    "card.details": "詳しく",
  },
  en: {
    "nav.projects": "projects",
    "nav.apps": "apps",
    "nav.faq": "faq",
    "nav.about": "about",
    "lang.switch": "日本語",
    "lang.label": "English",

    "hero.eyebrow": "arigatouapps · personal studio",
    "hero.ctaPrimary": "See what I built",
    "hero.ctaSecondary": "All apps",

    "projects.eyebrow": "projects",
    "projects.title": "What I'm building",
    "projects.android.title": "Android apps",
    "projects.android.desc": "Small, useful everyday tools like TimeAware, WatchLog and QR Widget.",
    "projects.android.cta": "See the list ↓",

    "apps.eyebrow": "apps · android",
    "apps.title": "Android apps",
    "apps.count": "on google play",
    "apps.more": "See the developer page on Google Play →",
    "apps.featured": "★ featured · android",
    "apps.getOnPlay": "Get it on Google Play",

    "faq.eyebrow": "faq",
    "faq.title": "Frequently asked questions",

    "about.eyebrow": "about",
    "about.title": "About ArigatouApps",
    "about.body":
      "I build Android apps and web tools as a personal hobby. Guided by the motto “build small, ship well,” I release little things that make everyday life a bit easier.",
    "about.contact": "Contact",
    "about.googlePlay": "Google Play",

    "cta.external": "Open link",
    "cta.view": "View",

    "app.home": "Home",
    "app.apps": "Apps",
    "app.get": "Get it on Google Play",
    "app.featTitle": "What it does",
    "app.features": "Features",
    "app.screens": "Screenshots",
    "app.related": "More apps",
    "app.allApps": "All apps",
    "app.demo": "See the theme",
    "app.demoNote": "Opens an immersive design demo in a new page",
    "card.details": "Details",
  },
} as const;

export type UiKey = keyof (typeof ui)["ja"];

/** 指定言語の翻訳関数を返す。未定義キーは日本語にフォールバック。 */
export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.ja[key];
}
