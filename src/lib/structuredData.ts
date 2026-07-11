// schema.org の JSON-LD を組み立てるヘルパー。
// AI検索(GEO)・Google双方に「誰が・何を提供しているか」を明示的に伝える。
// 言語別ページごとに inLanguage と各テキストを出し分ける。
import { site } from "../data/site";
import { apps, developerUrl } from "../data/apps";
import { services } from "../data/services";
import { faq } from "../data/faq";
import { t, langBase } from "../i18n";
import type { Lang } from "../i18n";
import type { AndroidAppWithUrl } from "../data/apps";
import { screenshots } from "../data/screenshots";

const SITE_URL = site.url; // https://arigatouapps.com

/** その言語ページの正規URL（ja=/, en=/en/） */
const pageUrl = (lang: Lang) => `${SITE_URL}${langBase(lang)}`;

// 開発者（組織/個人）
const organizationLd = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: "arigatouapps",
  url: SITE_URL,
  description: t(site.description, lang),
  sameAs: [developerUrl].filter(Boolean),
});

// Androidアプリ群を ItemList + SoftwareApplication で列挙
const appsLd = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: lang === "ja" ? "Androidアプリ一覧" : "Android apps",
  itemListElement: apps.map((app, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      description: t(app.desc, lang),
      applicationCategory: "MobileApplication",
      operatingSystem: "Android",
      url: app.playUrl,
      author: { "@type": "Organization", name: site.name },
    },
  })),
});

// Webサービス（公開中のもの）
const servicesLd = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: lang === "ja" ? "Webサービス一覧" : "Web services",
  itemListElement: services
    .filter((s) => s.status === "live")
    .map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebApplication",
        name: t(s.name, lang),
        description: t(s.desc, lang),
        url: s.url,
        applicationCategory: "WebApplication",
      },
    })),
});

// FAQPage
const faqLd = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: t(f.q, lang),
    acceptedAnswer: { "@type": "Answer", text: t(f.a, lang) },
  })),
});

// WebSite（言語を明示）
const webSiteLd = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: pageUrl(lang),
  inLanguage: lang,
  description: t(site.description, lang),
});

/** アプリ個別LP用の JSON-LD（SoftwareApplication + パンくず） */
export const appJsonLd = (app: AndroidAppWithUrl, lang: Lang) => {
  const base = langBase(lang);
  const appPageUrl = `${SITE_URL}${base}apps/${app.id}/`;
  const shots = (screenshots[app.id] ?? []).map((s) => `${SITE_URL}${s}`);
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: app.name,
      description: t(app.desc, lang),
      applicationCategory: "MobileApplication",
      operatingSystem: "Android",
      url: app.playUrl,
      inLanguage: lang,
      ...(app.icon ? { image: `${SITE_URL}${app.icon}` } : {}),
      ...(shots.length ? { screenshot: shots } : {}),
      offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
      author: { "@type": "Organization", name: site.name, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: lang === "ja" ? "ホーム" : "Home", item: `${SITE_URL}${base}` },
        { "@type": "ListItem", position: 2, name: app.name, item: appPageUrl },
      ],
    },
  ];
};

/** 言語別のトップページ用 JSON-LD 一式 */
export const homeJsonLd = (lang: Lang) => [
  organizationLd(lang),
  webSiteLd(lang),
  appsLd(lang),
  servicesLd(lang),
  faqLd(lang),
];
