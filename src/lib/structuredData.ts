// schema.org の JSON-LD を組み立てるヘルパー。
// AI検索(GEO)・Google双方に「誰が・何を提供しているか」を明示的に伝える。
import { site } from "../data/site";
import { apps, developerUrl } from "../data/apps";
import { services } from "../data/services";
import { faq } from "../data/faq";

const SITE_URL = site.url; // https://arigatouapps.com

// 開発者（組織/個人）
export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: "arigatouapps",
  url: SITE_URL,
  description: site.description,
  sameAs: [developerUrl].filter(Boolean),
};

// Androidアプリ群を ItemList + SoftwareApplication で列挙
export const appsLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Androidアプリ一覧",
  itemListElement: apps.map((app, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      description: app.desc,
      applicationCategory: "MobileApplication",
      operatingSystem: "Android",
      url: app.playUrl,
      author: { "@type": "Organization", name: site.name },
    },
  })),
};

// Webサービス（公開中のもの）
export const servicesLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Webサービス一覧",
  itemListElement: services
    .filter((s) => s.status === "live")
    .map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebApplication",
        name: s.name,
        description: s.desc,
        url: s.url,
        applicationCategory: "WebApplication",
      },
    })),
};

// FAQPage
export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const homeJsonLd = [organizationLd, appsLd, servicesLd, faqLd];
