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

  dotcityclock: {
    intro: {
      ja: "DotCityClock は、時刻をドット絵で描くレトロなデジタル時計アプリです。1粒ずつ灯るピクセルが数字をかたちづくり、ホーム画面に小さな“ドットの街”のような時計を置けます。",
      en: "DotCityClock is a retro digital clock that draws the time in pixel art. Each glowing dot builds up the digits, placing a tiny pixel cityscape of a clock on your home screen.",
    },
    sections: [
      {
        heading: { ja: "ドット絵そのままの時計", en: "A clock that is pixel art" },
        body: {
          ja: "アンチエイリアスをかけない、四角いドットだけで作られた数字。80〜90年代のドットマトリクス表示を思わせる、潔いレトロな見た目です。",
          en: "The digits are built from square dots with no anti-aliasing — the honest, retro look of an ’80s–’90s dot-matrix display.",
        },
      },
      {
        heading: { ja: "色は気分で切り替え", en: "Switch colors to match your mood" },
        body: {
          ja: "琥珀・シアン・マゼンタなど、CRTを思わせるカラーを選べます。壁紙や気分に合わせて、時計の雰囲気を変えられます。",
          en: "Choose CRT-style colors like amber, cyan or magenta, and match the clock to your wallpaper or your mood.",
        },
      },
      {
        heading: { ja: "ホーム画面ウィジェットとして", en: "As a home-screen widget" },
        body: {
          ja: "ホーム画面ウィジェットとして常駐させれば、時刻を確認するたびにドット絵の時計が迎えてくれます。",
          en: "Pin it as a home-screen widget and a pixel clock greets you every time you check the time.",
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
        q: { ja: "ウィジェットとして使えますか？", en: "Can I use it as a widget?" },
        a: {
          ja: "はい。ホーム画面ウィジェットとして配置できます。",
          en: "Yes, it can be placed as a home-screen widget.",
        },
      },
      {
        q: { ja: "どんな色が選べますか？", en: "What colors can I choose?" },
        a: {
          ja: "琥珀・シアン・マゼンタなど、レトロなCRT調のカラーから選べます。",
          en: "Retro CRT tones such as amber, cyan and magenta.",
        },
      },
    ],
  },

  kalco: {
    intro: {
      ja: "KALCO は、4つの数字を計算して24を作る数字パズルゲームです。足す・引く・掛ける・割るを組み合わせて、ちょうど24になる式を見つけます。ルールはシンプルですが、奥は深い頭の体操です。",
      en: "KALCO is a number puzzle where you combine four numbers to make exactly 24. Mix addition, subtraction, multiplication and division to find an expression that lands on 24 — simple rules, surprisingly deep play.",
    },
    sections: [
      {
        heading: { ja: "ルールはシンプル、奥は深い", en: "Simple rules, deep play" },
        body: {
          ja: "使う数字は4つ、目標は24。四則演算を自由に組み合わせるだけ。それでも“あと一歩”が見つからない問題もあり、解けたときの快感はクセになります。",
          en: "Four numbers, one target of 24, any mix of the four operations. Some boards still keep the answer just out of reach — and cracking them is addictive.",
        },
      },
      {
        heading: { ja: "スキマ時間の頭の体操", en: "A brain workout for spare minutes" },
        body: {
          ja: "1問は短時間で挑戦できるので、通勤・休憩・寝る前のちょっとした時間にぴったり。暗算力や発想の切り替えの練習にもなります。",
          en: "Each board takes only a moment, so it fits a commute, a break or the minutes before bed — and it sharpens mental arithmetic and flexible thinking.",
        },
      },
      {
        heading: { ja: "やさしい問題から難問まで", en: "From gentle to genuinely tricky" },
        body: {
          ja: "はじめは解きやすい問題から。慣れてきたら歯ごたえのある難問が待っています。数字が好きな人ほど夢中になれます。",
          en: "You start with approachable boards and work up to real head-scratchers. The more you like numbers, the more it pulls you in.",
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
        q: { ja: "オフラインで遊べますか？", en: "Can I play offline?" },
        a: { ja: "はい。オフラインでも遊べます。", en: "Yes, you can play offline." },
      },
      {
        q: { ja: "解くコツはありますか？", en: "Any tips for solving?" },
        a: {
          ja: "掛け算と割り算から考えると、24 に近づけやすいことが多いです。",
          en: "Starting from multiplication and division often gets you close to 24.",
        },
      },
    ],
  },

  progressdot: {
    intro: {
      ja: "ProgressDot は、1日や1年の“いま”をドットで見せてくれるウィジェットです。過ぎた時間と残りの時間をドットで表し、時間の流れをひと目で感じられます。",
      en: "ProgressDot is a widget that shows where you are in the day or the year, as dots. Elapsed and remaining time appear as filled and empty dots, so you feel the flow of time at a glance.",
    },
    sections: [
      {
        heading: { ja: "時間を“見える化”する", en: "Make time visible" },
        body: {
          ja: "「今日はもう半分過ぎた」「今年も残りわずか」——数字よりも直感的に、ドットの埋まり具合で時間の残量が伝わります。",
          en: "‘Half the day is already gone,’ ‘not much of the year left’ — the fill level of the dots conveys how much time remains more intuitively than any number.",
        },
      },
      {
        heading: { ja: "気が散らないシンプルさ", en: "Distraction-free by design" },
        body: {
          ja: "余計な情報は載せず、進捗のドットだけ。ホーム画面に置いても邪魔にならず、そっと今を教えてくれます。",
          en: "No clutter, just the progress dots. It sits quietly on your home screen and gently reminds you where you are.",
        },
      },
      {
        heading: { ja: "見たい単位を選んで", en: "Pick your unit" },
        body: {
          ja: "1日、1年など、見たい単位で進捗を表示できます。時間の使い方を意識するきっかけになります。",
          en: "Show progress by the unit you care about — a day, a year — and stay mindful of how you spend your time.",
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
        q: { ja: "ウィジェットとして使えますか？", en: "Can I use it as a widget?" },
        a: {
          ja: "はい。ホーム画面ウィジェットとして配置できます。",
          en: "Yes, it can be placed as a home-screen widget.",
        },
      },
      {
        q: { ja: "どんな単位を表示できますか？", en: "What units can it show?" },
        a: {
          ja: "1日や1年など、時間の進捗を表示できます。",
          en: "Time progress such as a day or a year.",
        },
      },
    ],
  },

  linkremind: {
    intro: {
      ja: "LinkRemind は、あとで読みたいURLを保存して、忘れないようにリマインドしてくれるアプリです。気になった記事や動画を“とりあえず保存”して、あとで確実に読み返せます。",
      en: "LinkRemind saves the URLs you want to read later and reminds you so they don't slip away. Stash an interesting article or video now, and actually come back to it later.",
    },
    sections: [
      {
        heading: { ja: "“あとで読む”を確実に", en: "Make ‘read it later’ actually happen" },
        body: {
          ja: "ブラウザのタブに溜めっぱなし、ブックマークして忘れる——そんな“あとで読む”の失敗をなくします。保存したリンクにリマインドを設定できます。",
          en: "Tabs left open forever, bookmarks you never revisit — LinkRemind fixes the usual ways ‘read it later’ fails, by letting you set a reminder on each saved link.",
        },
      },
      {
        heading: { ja: "通知で思い出させてくれる", en: "A nudge when it's time" },
        body: {
          ja: "設定したタイミングで通知が届くので、保存したまま埋もれることがありません。読みたいものを、読みたいときに。",
          en: "A notification arrives when you chose, so saved links don't get buried. The things you meant to read, when you meant to read them.",
        },
      },
      {
        heading: { ja: "たまったリンクを整理", en: "Keep your list tidy" },
        body: {
          ja: "保存したURLを一覧で管理でき、読み終えたものは片付けてすっきり。情報の“積ん読”を減らせます。",
          en: "Manage saved URLs in one list and clear out what you've finished, so your reading pile stays under control.",
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
        q: { ja: "リマインドは設定できますか？", en: "Can I set reminders?" },
        a: {
          ja: "はい。保存したURLごとにリマインドを設定できます。",
          en: "Yes, you can set a reminder on each saved URL.",
        },
      },
      {
        q: { ja: "どんなURLでも保存できますか？", en: "Can I save any URL?" },
        a: {
          ja: "はい。記事や動画など、URLであれば保存できます。",
          en: "Yes — articles, videos, anything with a URL.",
        },
      },
    ],
  },

  notikeeper: {
    intro: {
      ja: "Notikeeper は、うっかり消してしまった通知を保存して、あとから見返せるアプリです。「今の通知、何だっけ？」をなくし、大事なお知らせを取りこぼしません。",
      en: "Notikeeper saves the notifications you accidentally swiped away, so you can look back at them later. No more ‘wait, what was that notification?’ — and no more missed messages.",
    },
    sections: [
      {
        heading: { ja: "消えた通知を救い出す", en: "Rescue dismissed notifications" },
        body: {
          ja: "スワイプで消した通知や、気づかないうちに流れていった通知も、Notikeeper が記録しておきます。あとからゆっくり確認できます。",
          en: "Notifications you swiped away — or that scrolled past before you noticed — are logged by Notikeeper so you can review them at your own pace.",
        },
      },
      {
        heading: { ja: "アプリごとに整理", en: "Organized by app" },
        body: {
          ja: "通知はアプリごとに整理されるので、目的のものを見つけやすい。履歴をたどるように過去の通知を振り返れます。",
          en: "Notifications are grouped by app, so the one you want is easy to find as you scroll back through your history.",
        },
      },
      {
        heading: { ja: "大事なお知らせを逃さない", en: "Never miss what matters" },
        body: {
          ja: "配達・決済・連絡など、後から確認したい通知ほど消えると困るもの。Notikeeper があれば安心です。",
          en: "Deliveries, payments, messages — the notifications you most want to check later are the worst to lose. Notikeeper keeps them safe.",
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
        q: { ja: "消した通知も残りますか？", en: "Are dismissed notifications kept?" },
        a: {
          ja: "はい。スワイプで消した通知も記録され、あとから確認できます。",
          en: "Yes. Even swiped-away notifications are logged and can be checked later.",
        },
      },
      {
        q: { ja: "アプリごとに見られますか？", en: "Can I browse them by app?" },
        a: {
          ja: "はい。通知はアプリごとに整理して見返せます。",
          en: "Yes, notifications are organized by app for easy review.",
        },
      },
    ],
  },

  appclock: {
    intro: {
      ja: "AppClock は、アプリごとの使用時間を計測し、使いすぎたときにそっと知らせてくれるアプリです。どのアプリにどれだけ時間を使っているかを把握し、スマホとの付き合い方を見直せます。",
      en: "AppClock measures how long you spend in each app and gives you a gentle heads-up when you overdo it. See where your time actually goes and rethink how you use your phone.",
    },
    sections: [
      {
        heading: { ja: "時間の使い道を可視化", en: "See where your time goes" },
        body: {
          ja: "「気づいたら1時間」——そのアプリ、実際に何分使っていますか？ AppClock がアプリ別の使用時間を記録し、事実として見せてくれます。",
          en: "‘Suddenly an hour’s gone’ — but how many minutes was it really? AppClock logs your per-app usage and shows you the facts.",
        },
      },
      {
        heading: { ja: "使いすぎたら通知でお知らせ", en: "A nudge when you overuse" },
        body: {
          ja: "設定した時間を超えると通知でお知らせ。だらだら使いを断ち切るきっかけになります。",
          en: "Cross the limit you set and a notification lets you know — a cue to break the mindless scrolling.",
        },
      },
      {
        heading: { ja: "スマホ時間を見直すきっかけに", en: "A prompt to reset your habits" },
        body: {
          ja: "責め立てるのではなく、そっと気づかせる。小さな気づきの積み重ねが、スマホとの健康的な距離感につながります。",
          en: "It doesn't scold — it quietly reminds. Those small realizations add up to a healthier distance from your phone.",
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
        q: { ja: "使いすぎを通知してくれますか？", en: "Does it notify me when I overuse an app?" },
        a: {
          ja: "はい。設定した使用時間を超えると、お知らせの通知が届きます。",
          en: "Yes. When you pass the limit you set, a notification lets you know.",
        },
      },
      {
        q: { ja: "アプリごとに時間が分かりますか？", en: "Can I see time per app?" },
        a: {
          ja: "はい。アプリごとの使用時間を記録して確認できます。",
          en: "Yes, usage time is recorded and viewable per app.",
        },
      },
    ],
  },

  "vizfy-android": {
    intro: {
      ja: "Vizfy は、再生中の音楽をリアルタイムに視覚化するアプリです。音に合わせて画面が波打ち、聴いている曲を“景色”として楽しめます。Web版と同じ体験を、Androidアプリでも。",
      en: "Vizfy visualizes the music you're playing in real time. The screen ripples with the sound so you can enjoy the track as a moving landscape — the same experience as the web version, now on Android.",
    },
    sections: [
      {
        heading: { ja: "音を、目でも楽しむ", en: "Enjoy sound with your eyes" },
        body: {
          ja: "再生中の音に反応して、スペクトラムがリアルタイムに動きます。作業中のBGMも、目で見て楽しい体験に変わります。",
          en: "The spectrum moves in real time with whatever's playing, turning even background music into something you enjoy watching.",
        },
      },
      {
        heading: { ja: "Last.fm の履歴を可視化", en: "Visualize your Last.fm history" },
        body: {
          ja: "Last.fm と連携すると、これまでの聴取履歴をツリーマップで表示。よく聴くアーティストの偏りが、色と面積で見えてきます。",
          en: "Connect Last.fm and your listening history becomes a treemap, where your favorite artists show up in color and size.",
        },
      },
      {
        heading: { ja: "Web版と同じ体験をポケットに", en: "The web experience in your pocket" },
        body: {
          ja: "ブラウザで使える Web版と同じ体験を、Androidアプリでも。いつでも手元で音楽を可視化できます。",
          en: "The same experience as the browser version, in an Android app — visualize your music anytime, right in your hand.",
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
        q: { ja: "Last.fm の連携は必須ですか？", en: "Is Last.fm required?" },
        a: {
          ja: "いいえ。連携しなくても再生中の音の可視化は楽しめます。履歴のツリーマップ表示に Last.fm を使います。",
          en: "No. You can enjoy the live visualization without it; Last.fm is used for the listening-history treemap.",
        },
      },
      {
        q: { ja: "Web版もありますか？", en: "Is there a web version?" },
        a: {
          ja: "はい。ブラウザで使える Web版もあります。",
          en: "Yes, there's also a browser-based web version.",
        },
      },
    ],
  },

  qrwidget: {
    intro: {
      ja: "QR Widget は、よく使うQRコードをホーム画面ウィジェットにして、タップせずすぐ表示できるアプリです。Wi-Fiや連絡先、URLの共有が、アプリを開く手間なくスムーズになります。",
      en: "QR Widget turns your most-used QR codes into home-screen widgets you can show instantly, without opening an app. Sharing Wi-Fi, contacts or a URL becomes a one-glance action.",
    },
    sections: [
      {
        heading: { ja: "よく使うQRを“置いておく”", en: "Keep your go-to QR codes at hand" },
        body: {
          ja: "毎回アプリを開いて表示していたQRコードを、ホーム画面に常駐させられます。見せたい瞬間に、すぐそこにあります。",
          en: "The QR codes you used to dig out each time can live right on your home screen, ready the moment you need to show one.",
        },
      },
      {
        heading: { ja: "共有がスムーズに", en: "Smoother sharing" },
        body: {
          ja: "Wi-Fiのパスワード、連絡先、URL——口頭や手入力で伝えていたものを、QRを見せるだけで済ませられます。",
          en: "Wi-Fi passwords, contacts, URLs — instead of reading them out or typing them in, just show the QR.",
        },
      },
      {
        heading: { ja: "タップ不要でその場に表示", en: "No tapping, just there" },
        body: {
          ja: "ウィジェットなのでアプリ起動の待ち時間がありません。ホーム画面にQRがそのまま表示されます。",
          en: "Because it's a widget, there's no app to wait for — the QR is simply there on your home screen.",
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
        q: { ja: "ウィジェットとして使えますか？", en: "Can I use it as a widget?" },
        a: {
          ja: "はい。ホーム画面ウィジェットとして配置できます。",
          en: "Yes, it can be placed as a home-screen widget.",
        },
      },
      {
        q: { ja: "どんなQRを登録できますか？", en: "What kinds of QR codes can I add?" },
        a: {
          ja: "Wi-Fi・連絡先・URLなど、よく使うQRコードを登録できます。",
          en: "Frequently used codes such as Wi-Fi, contacts and URLs.",
        },
      },
    ],
  },

  onemotion: {
    intro: {
      ja: "OneMotion Launcher は、ジェスチャー中心で素早く操作できるミニマルなホームランチャーです。アイコンを探してタップする代わりに、スワイプなどのひと動作でアプリを呼び出せます。",
      en: "OneMotion Launcher is a minimal home launcher built around gestures. Instead of hunting for an icon and tapping, you call up apps with a single swipe or motion.",
    },
    sections: [
      {
        heading: { ja: "ひと動作で、素早く", en: "One motion, done" },
        body: {
          ja: "よく使う操作をジェスチャーに割り当てれば、ホーム画面を探し回る必要がありません。片手でも、見ずに近い感覚で操作できます。",
          en: "Assign your common actions to gestures and you stop searching the home screen. It works one-handed, almost without looking.",
        },
      },
      {
        heading: { ja: "無駄を削ぎ落としたホーム", en: "A home with the clutter gone" },
        body: {
          ja: "アイコンで埋め尽くされたホームではなく、必要なものだけのすっきりした画面。集中を妨げない、静かなデザインです。",
          en: "Not a home screen packed with icons, but a clean one with only what you need — a quiet design that doesn't break your focus.",
        },
      },
      {
        heading: { ja: "片手でも快適", en: "Comfortable one-handed" },
        body: {
          ja: "大きな画面でも、ジェスチャー中心なら指の届く範囲で完結。移動中でも扱いやすい設計です。",
          en: "Even on a big screen, gesture-first control stays within thumb's reach — easy to use on the move.",
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
        q: { ja: "元のランチャーに戻せますか？", en: "Can I switch back to my old launcher?" },
        a: {
          ja: "はい。Android の「デフォルトのホームアプリ」設定からいつでも戻せます。",
          en: "Yes. You can switch back anytime from Android's default home app setting.",
        },
      },
      {
        q: { ja: "ジェスチャーは設定できますか？", en: "Can I configure the gestures?" },
        a: {
          ja: "はい。よく使う操作に合わせてジェスチャーを設定できます。",
          en: "Yes, you can map gestures to the actions you use most.",
        },
      },
    ],
  },

  qrscanner: {
    intro: {
      ja: "QR/URL AI Scanner は、QRコードやURLの安全性をAIで判定してくれる“安心スキャナー”です。読み取った先が怪しくないかをチェックし、危険なリンクを開く前に警告します。",
      en: "QR/URL AI Scanner is a safety-first scanner that uses AI to judge whether a QR code or URL is risky, warning you before you open a dangerous link.",
    },
    sections: [
      {
        heading: { ja: "開く前に、安全をチェック", en: "Check safety before you open" },
        body: {
          ja: "QRコードは中身が見えないまま読み取ってしまいがち。スキャナーが読み取り先を解析し、安全かどうかの目安を示します。",
          en: "A QR code hides its destination until you've already scanned it. This scanner analyzes where it leads and gives you a read on whether it's safe.",
        },
      },
      {
        heading: { ja: "怪しいリンクに警告", en: "Warns on suspicious links" },
        body: {
          ja: "フィッシングや不審なURLの疑いがあれば警告。うっかり危険なサイトを開くリスクを下げられます。",
          en: "If a link looks like phishing or otherwise suspicious, it warns you — lowering the risk of opening a dangerous site by mistake.",
        },
      },
      {
        heading: { ja: "安心してスキャンできる", en: "Scan with peace of mind" },
        body: {
          ja: "お店の決済QR、チラシのQR、共有されたURL——日常のスキャンを、少しだけ安心にします。",
          en: "Payment QRs in shops, codes on flyers, links people send you — it makes the everyday scan a little safer.",
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
        q: { ja: "どうやって安全性を判定しますか？", en: "How does it judge safety?" },
        a: {
          ja: "読み取ったQR/URLをAIで解析し、安全性の目安を示します。",
          en: "It analyzes the scanned QR/URL with AI and gives you a safety indication.",
        },
      },
      {
        q: { ja: "100%安全と保証されますか？", en: "Is it a 100% guarantee?" },
        a: {
          ja: "いいえ。判定はあくまで目安です。最終的にはご自身でも慎重にご判断ください。",
          en: "No. The result is only a guide — please still use your own judgment before opening anything.",
        },
      },
    ],
  },

  watchlog: {
    intro: {
      ja: "WatchLog は、YouTube の視聴履歴を記録し、どれだけ見たかを振り返れるトラッカーです。「今日はどのくらい見た？」を可視化して、だらだら視聴を見直すきっかけをくれます。",
      en: "WatchLog logs your YouTube viewing and lets you look back on how much you've watched. It shows ‘how long today?’ and gives you a reason to rein in the endless autoplay.",
    },
    sections: [
      {
        heading: { ja: "視聴時間を振り返る", en: "Look back on your watch time" },
        body: {
          ja: "気づけば何本も見てしまう YouTube。WatchLog が視聴を記録し、使った時間を数字で見せてくれます。",
          en: "It's easy to watch one more video, then another. WatchLog records your viewing and shows the time you spent as a number.",
        },
      },
      {
        heading: { ja: "だらだら視聴を見直す", en: "Rethink the mindless binge" },
        body: {
          ja: "「思ったより見ていた」と気づくことが、見直しの第一歩。責めるのではなく、事実をそっと示します。",
          en: "Realizing ‘that was more than I thought’ is the first step to change. It doesn't scold — it just shows you the facts.",
        },
      },
      {
        heading: { ja: "時間の使い方を意識する", en: "Stay aware of your time" },
        body: {
          ja: "娯楽の時間を否定するのではなく、意識できるようにする。自分のペースを取り戻す手助けになります。",
          en: "It's not about cutting out entertainment, but being aware of it — a small help in taking your pace back.",
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
        q: { ja: "視聴時間を記録してくれますか？", en: "Does it record my watch time?" },
        a: {
          ja: "はい。YouTube の視聴を記録し、あとから振り返れます。",
          en: "Yes. It records your YouTube viewing so you can review it later.",
        },
      },
      {
        q: { ja: "何が確認できますか？", en: "What can I see?" },
        a: {
          ja: "視聴した時間などを振り返って確認できます。",
          en: "You can look back on details such as how long you watched.",
        },
      },
    ],
  },

  skipbook: {
    intro: {
      ja: "SkipBook は、「我慢してやめた出費」を記録して、節約できた金額を可視化する家計アプリです。買わなかった金額が積み上がっていくのを見ると、我慢が小さな達成感に変わります。",
      en: "SkipBook is a budgeting app that logs the purchases you chose to skip and visualizes how much you saved. Watching the ‘didn't buy’ amount grow turns restraint into a small win.",
    },
    sections: [
      {
        heading: { ja: "“買わなかった”を記録する", en: "Record what you didn't buy" },
        body: {
          ja: "欲しかったけれど我慢したもの、その金額を記録します。ふつうの家計簿とは逆の発想で、節約を前向きに続けられます。",
          en: "Log the things you wanted but passed on, and their price. It flips the usual expense tracker around, making saving something you keep up with gladly.",
        },
      },
      {
        heading: { ja: "節約額が積み上がる達成感", en: "The satisfaction of stacking up savings" },
        body: {
          ja: "小さな我慢も、記録すれば合計金額として見えてきます。「これだけ貯められた」という手応えが、次の我慢を後押しします。",
          en: "Even small acts of restraint add up to a visible total. Seeing ‘I saved this much’ makes the next one easier.",
        },
      },
      {
        heading: { ja: "無理なく続けるために", en: "Built to keep going" },
        body: {
          ja: "がんばりを数字で可視化することで、モチベーションが続きます。節約を我慢ではなく、ゲームのように楽しめます。",
          en: "Turning effort into a number keeps motivation up, so saving feels less like deprivation and more like a game.",
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
        q: { ja: "どうやって使いますか？", en: "How do I use it?" },
        a: {
          ja: "我慢してやめた出費の内容と金額を記録するだけです。合計の節約額を自動で集計します。",
          en: "Just log what you skipped and its price — SkipBook totals up your savings automatically.",
        },
      },
      {
        q: { ja: "ふつうの家計簿と何が違いますか？", en: "How is it different from a normal expense tracker?" },
        a: {
          ja: "支払った額ではなく、“買わずに節約した額”を記録するのが特徴です。",
          en: "Instead of what you spent, it records what you saved by not buying.",
        },
      },
    ],
  },
};
