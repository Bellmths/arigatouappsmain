// プライバシーポリシー / About / お問い合わせ の固定ページ本文（日英）。
// AdSense 審査で必須級の独立ページ。本文は set:html で描画する。
import type { Loc } from "../i18n";

export const legalTitles: Record<string, Loc> = {
  privacy: { ja: "プライバシーポリシー", en: "Privacy Policy" },
  about: { ja: "ArigatouApps について", en: "About ArigatouApps" },
  contact: { ja: "お問い合わせ", en: "Contact" },
};

/** フッターに出す順序 */
export const legalOrder = ["about", "privacy", "contact"] as const;

export const legal: Record<string, Loc> = {
  privacy: {
    ja: `
<p>ArigatouApps（以下「当サイト」）における個人情報・Cookie の取り扱いについて説明します。最終更新日: 2026年7月14日。</p>

<h2>広告の配信について</h2>
<p>当サイトは、第三者配信の広告サービス「Google AdSense」を利用する場合があります。Google などの第三者広告配信事業者は、Cookie を使用して、ユーザーの過去のアクセス情報に基づいた広告を表示することがあります。</p>
<p>Google が広告 Cookie を使用することにより、Google やそのパートナーは、当サイトや他のサイトへのアクセス情報に基づいて適切な広告を表示できます。ユーザーは <a href="https://adssettings.google.com/" target="_blank" rel="noopener">広告設定</a> でパーソナライズ広告を無効にできます。また <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">www.aboutads.info</a> から第三者配信事業者の Cookie を無効にできます。</p>

<h2>Cookie について</h2>
<p>Cookie は、ウェブサイトがユーザーのブラウザに保存する小さなデータファイルです。当サイトでは、表示言語の記憶や広告配信のために Cookie を使用する場合があります。ユーザーはブラウザの設定からいつでも Cookie を無効にできます。</p>

<h2>アクセス解析</h2>
<p>当サイトでは、今後アクセス解析ツールを利用する場合があります。その際は Cookie を用いて匿名のトラフィックデータを収集しますが、個人を特定する情報は含みません。</p>

<h2>お問い合わせで取得する情報</h2>
<p>メールでお問い合わせいただいた場合、返信のためにメールアドレス等の情報を利用します。これらの情報は、お問い合わせへの対応以外の目的では使用しません。</p>

<h2>免責事項</h2>
<p>当サイトからリンクする外部サイト（Google Play、各サービスのサブドメイン等）の内容について、当サイトは責任を負いかねます。各サービスのご利用は、それぞれの提供元の規約に従ってください。</p>

<h2>ポリシーの変更</h2>
<p>本ポリシーの内容は、予告なく変更されることがあります。変更後の内容は、当ページに掲載した時点で効力を生じるものとします。</p>

<h2>お問い合わせ先</h2>
<p>本ポリシーに関するお問い合わせは <a href="mailto:hello@arigatouapps.com">hello@arigatouapps.com</a> までご連絡ください。</p>
`,
    en: `
<p>This page explains how ArigatouApps ("this site") handles personal information and cookies. Last updated: July 14, 2026.</p>

<h2>Advertising</h2>
<p>This site may use Google AdSense, a third-party advertising service. Third-party vendors, including Google, may use cookies to serve ads based on a user's prior visits to this site or other websites.</p>
<p>Google's use of advertising cookies enables it and its partners to serve relevant ads based on visits to this and other sites. You can opt out of personalized advertising via <a href="https://adssettings.google.com/" target="_blank" rel="noopener">Google Ads Settings</a>, or opt out of third-party vendor cookies at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">www.aboutads.info</a>.</p>

<h2>Cookies</h2>
<p>Cookies are small data files a website stores in your browser. This site may use cookies to remember your language preference and to serve advertising. You can disable cookies at any time in your browser settings.</p>

<h2>Analytics</h2>
<p>This site may use analytics tools in the future. If so, they collect anonymous traffic data via cookies and do not include personally identifiable information.</p>

<h2>Information from your inquiries</h2>
<p>If you contact us by email, we use your email address and any information you provide solely to respond to your inquiry.</p>

<h2>Disclaimer</h2>
<p>We are not responsible for the content of external sites linked from this site (Google Play, service subdomains, and so on). Please use each service in accordance with the terms of its provider.</p>

<h2>Changes to this policy</h2>
<p>This policy may be changed without notice. Any changes take effect once posted on this page.</p>

<h2>Contact</h2>
<p>For questions about this policy, please contact <a href="mailto:hello@arigatouapps.com">hello@arigatouapps.com</a>.</p>
`,
  },

  about: {
    ja: `
<p>ArigatouApps は、個人開発者が「小さく作って、ちゃんと届ける」をモットーに公開している、Android アプリと Web ツールのポータルサイトです。</p>

<h2>つくっているもの</h2>
<p>ダムフォン化ランチャー「TimeAware」、ドット絵のピクセル時計「DotCityClock」、サブスク管理「SubMinder」、音楽ビジュアライザ「Vizfy」など、日常を少し便利にする小品を中心に、合計14本の Android アプリを Google Play で公開しています。あわせて、株式ビューアや Vizfy Web 版などの Web サービスも運営しています。</p>

<h2>大切にしていること</h2>
<p>派手さよりも、毎日の中で「少し軽くなる」体験を大切にしています。ひとつひとつのアプリを、ていねいに、必要な機能だけに絞って作ることを心がけています。多くのアプリはオフラインで完結し、アカウント登録を必要としません。</p>

<h2>各プロダクトについて</h2>
<p>それぞれのアプリの詳細（機能・スクリーンショット・よくある質問）は、トップページの一覧から各プロダクトのページでご確認いただけます。当サイトは日本語と英語に対応しています。</p>

<h2>運営者</h2>
<p>Arigatou Apps</p>

<h2>お問い合わせ</h2>
<p>ご意見・ご要望は <a href="mailto:hello@arigatouapps.com">hello@arigatouapps.com</a> までお気軽にどうぞ。</p>
`,
    en: `
<p>ArigatouApps is an indie developer's portal for Android apps and web tools, built on the motto "build small, ship well."</p>

<h2>What we make</h2>
<p>We publish 14 Android apps on Google Play — including the TimeAware dumbphone launcher, the DotCityClock pixel clock, the SubMinder subscription manager, and the Vizfy music visualizer — small tools that make everyday life a little easier. We also run web services such as a stock viewer and the web version of Vizfy.</p>

<h2>What we care about</h2>
<p>We value the feeling of a day getting a little lighter over flashy features. Each app is built carefully, kept to only the functions it needs. Many of them work fully offline and require no account.</p>

<h2>About each product</h2>
<p>You can find each app's details — features, screenshots, and frequently asked questions — on its own page, reachable from the list on the home page. This site is available in Japanese and English.</p>

<h2>Operator</h2>
<p>Arigatou Apps</p>

<h2>Contact</h2>
<p>We'd love to hear your thoughts at <a href="mailto:hello@arigatouapps.com">hello@arigatouapps.com</a>.</p>
`,
  },

  contact: {
    ja: `
<p>ArigatouApps へのお問い合わせは、以下の方法で受け付けています。</p>

<h2>メール</h2>
<p>ご質問・ご要望・不具合の報告などは、<a href="mailto:hello@arigatouapps.com">hello@arigatouapps.com</a> までご連絡ください。個人で運営しているため、返信までお時間をいただく場合があります。</p>

<h2>各アプリについて</h2>
<p>アプリごとのお問い合わせは、Google Play の各アプリのストアページに記載の連絡先からもご連絡いただけます。すべてのアプリは <a href="https://play.google.com/store/apps/developer?id=artigatou" target="_blank" rel="noopener">Google Play の開発者ページ</a> から一覧で確認できます。</p>
`,
    en: `
<p>You can reach ArigatouApps in the following ways.</p>

<h2>Email</h2>
<p>For questions, requests, or bug reports, please contact <a href="mailto:hello@arigatouapps.com">hello@arigatouapps.com</a>. This is a one-person project, so replies may take a little time.</p>

<h2>About individual apps</h2>
<p>For questions about a specific app, you can also use the contact details on its Google Play store page. All apps are listed on the <a href="https://play.google.com/store/apps/developer?id=artigatou" target="_blank" rel="noopener">Google Play developer page</a>.</p>
`,
  },
};
