// アプリ個別LPの「厚い本文」。薄いページ対策（SEO）と AI検索(GEO)向けに、
// 概要文・H2付きの本文セクション・アプリ別FAQを持つ。
// まずは代表アプリで型を作り、順次ほかのアプリにも展開する。
// 未登録のアプリは従来どおり簡易レイアウトのまま（graceful degradation）。
import type { Loc } from "../i18n";

export interface AppContent {
  /** 導入の概要文（1段落） */
  intro?: Loc;
  /** H2見出し＋本文の段落群 */
  sections?: { heading: Loc; body: Loc }[];
  /** アプリ別FAQ（画面表示＋FAQPage構造化データに利用） */
  faq?: { q: Loc; a: Loc }[];
}

export const appContent: Record<string, AppContent> = {
  timeaware: {
    intro: {
      ja: "TimeAware は、スマートフォンを“使うための道具”に戻すホームランチャーです。ホーム画面から余計なアプリと通知の誘惑を取り除き、本当に必要なものだけを残します。派手な壁紙もウィジェットの洪水もなく、開くたびに静かな画面が迎えてくれます。",
      en: "TimeAware is a home launcher that turns your smartphone back into a tool you use on purpose. It clears the distractions off your home screen and keeps only what you actually need — no busy wallpaper, no wall of widgets, just a calm screen every time you unlock.",
    },
    sections: [
      {
        heading: { ja: "なぜ“ダムフォン化”するのか", en: "Why go dumbphone" },
        body: {
          ja: "スマホを開くたびに SNS やニュースがつい目に入り、気づけば時間が溶けている——誰にでも覚えのある感覚です。TimeAware はホーム画面をシンプルなアプリ一覧だけにすることで、無意識の“ながら操作”のきっかけそのものを減らします。ガラケー（ダムフォン）のような割り切りを、いま使っているスマホのまま実現できます。",
          en: "Every time you unlock your phone, a feed or a headline catches your eye and the minutes quietly disappear. TimeAware reduces those triggers by stripping the home screen down to a plain list of apps. It brings the deliberate simplicity of a dumbphone to the smartphone you already own.",
        },
      },
      {
        heading: { ja: "使い方はかんたん", en: "Simple to set up" },
        body: {
          ja: "インストール後、TimeAware を既定のホームアプリに設定するだけです。よく使うアプリだけを選んで並べ、ホーム画面でその日のスクリーンタイムをひと目で確認できます。設定はオフラインで完結し、アカウント登録も必要ありません。",
          en: "Install it, then set TimeAware as your default home app. Choose the handful of apps you actually use, and see the day's screen time at a glance right on the home screen. Everything works offline, and no account is required.",
        },
      },
      {
        heading: { ja: "こんな人におすすめ", en: "Who it's for" },
        body: {
          ja: "「気づくと1時間スマホを触っていた」という人、勉強や仕事に集中したい人、デジタルデトックスを試したい人に向いています。スマホを手放すのではなく、付き合い方だけを少し変えたい——そんな人のためのランチャーです。",
          en: "It fits people who keep finding they've scrolled for an hour, who want to focus on study or work, or who want to try a digital detox. It's for anyone who doesn't want to give up their phone, just change how they live with it.",
        },
      },
    ],
    faq: [
      {
        q: { ja: "アカウント登録は必要ですか？", en: "Do I need an account?" },
        a: {
          ja: "いいえ。TimeAware はオフラインで動作し、アカウント登録は不要です。",
          en: "No. TimeAware works offline and requires no account.",
        },
      },
      {
        q: { ja: "元のホーム画面に戻せますか？", en: "Can I switch back to my old launcher?" },
        a: {
          ja: "はい。Android の「デフォルトのホームアプリ」設定から、いつでも元のランチャーに戻せます。",
          en: "Yes. You can switch back anytime from Android's default home app setting.",
        },
      },
      {
        q: { ja: "通知は受け取れますか？", en: "Will I still get notifications?" },
        a: {
          ja: "はい。通知はこれまで通り届きます。シンプルになるのはホーム画面の見た目だけです。",
          en: "Yes. Notifications arrive as usual — only the look of the home screen becomes simpler.",
        },
      },
      {
        q: { ja: "無料で使えますか？", en: "Is it free?" },
        a: {
          ja: "基本的に無料で利用できます。詳細は Google Play のストアページをご確認ください。",
          en: "It's basically free to use. See the Google Play listing for details.",
        },
      },
    ],
  },

  subminder: {
    intro: {
      ja: "SubMinder は、増えがちなサブスクリプションの料金と支払日をまとめて管理できるアプリです。動画・音楽・クラウド・アプリ課金——契約はいつのまにか積み重なり、合計いくら払っているのか分からなくなりがちです。SubMinder はそれを1画面で見える化します。",
      en: "SubMinder keeps all your subscription costs and due dates in one place. Streaming, music, cloud storage, in-app plans — they pile up quietly until you've lost track of what you're paying in total. SubMinder makes that total visible on a single screen.",
    },
    sections: [
      {
        heading: { ja: "サブスクの“見えない出費”を可視化", en: "See the spending you'd otherwise miss" },
        body: {
          ja: "月額数百円のサービスも、10個集まれば数千円。SubMinder に登録しておけば、毎月・毎年の合計支払額がひと目で分かります。使っていないサービスに気づき、解約するかどうかの判断がしやすくなります。",
          en: "A few hundred yen a month feels like nothing, but ten of those add up fast. With everything logged in SubMinder, your monthly and yearly totals are clear at a glance — so it's easy to spot what you no longer use and decide whether to cancel.",
        },
      },
      {
        heading: { ja: "更新前に通知でお知らせ", en: "A heads-up before every renewal" },
        body: {
          ja: "各サービスの支払日を登録すると、更新の前に通知でリマインドします。「無料トライアルのつもりが課金されていた」「解約を忘れて1年分払っていた」といった、うっかりの出費を防げます。",
          en: "Add each service's billing date and SubMinder reminds you before it renews. No more free trials that quietly turned into charges, or a forgotten cancellation that cost you a whole year.",
        },
      },
      {
        heading: { ja: "使い方", en: "How it works" },
        body: {
          ja: "契約中のサービス名・料金・支払サイクル（月額／年額）・次回支払日を登録するだけ。あとは SubMinder が合計金額の集計と、支払前の通知を受け持ちます。",
          en: "Just add each service's name, price, billing cycle (monthly or yearly) and next due date. From there SubMinder handles the totals and the pre-payment reminders for you.",
        },
      },
    ],
    faq: [
      {
        q: { ja: "無料で使えますか？", en: "Is it free?" },
        a: {
          ja: "基本的に無料で利用できます。詳細は Google Play のストアページをご確認ください。",
          en: "It's basically free to use. See the Google Play listing for details.",
        },
      },
      {
        q: { ja: "どんなサブスクを登録できますか？", en: "What kinds of subscriptions can I add?" },
        a: {
          ja: "動画・音楽・クラウドストレージ・アプリ課金など、定期的に支払うサービスを自由に登録できます。",
          en: "Any recurring service — video, music, cloud storage, in-app plans and more.",
        },
      },
      {
        q: { ja: "更新の前に通知されますか？", en: "Does it warn me before a renewal?" },
        a: {
          ja: "はい。登録した支払日にもとづき、更新の前にリマインド通知でお知らせします。",
          en: "Yes. Based on the billing date you enter, it reminds you before the renewal.",
        },
      },
    ],
  },
};
