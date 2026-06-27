# メインポータルサイト

Astro 製のメインランディングページ。Webサービス（株サイト・Vizfy）、Androidアプリ群、
将来のブログへの導線をまとめる。Cloudflare Pages にデプロイする想定。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的出力
npm run preview  # ビルド結果をローカル確認
```

## 構成

```
src/
├─ data/
│  ├─ site.ts       サイト名・タグライン・外部リンク
│  ├─ services.ts   Webサービス（株サイト・Vizfy）  ← 増やすならここ
│  └─ apps.ts       Androidアプリ一覧（10個想定）   ← 増やすならここ
├─ components/      ServiceCard / AppCard / Badge
├─ layouts/         BaseLayout（ヘッダー・フッター・メタ）
├─ pages/
│  └─ index.astro   トップ（Hero / サービス / アプリ / ブログ導線）
└─ styles/
   └─ global.css    テーマ変数（色・角丸など）はここで一括変更
```

## よくある更新

- **アプリ/サービスを追加** → `src/data/apps.ts` または `services.ts` に1ブロック追加するだけ。
- **公開状態の切替** → `status` を `"coming"`（準備中）→ `"wip"`（開発中）→ `"live"`（公開中）に変更。
  `live` かつ URL があるとカードがリンクになる。
- **アプリアイコン** → 画像を `public/apps/xxx.png` に置き、`icon: "/apps/xxx.png"` を指定。未指定なら絵文字。
- **配色/デザイン** → `src/styles/global.css` の `:root` 変数を編集。
- **本番URL** → `astro.config.mjs` の `site` を実ドメインに変更。
- **ブログ導線** → `src/data/site.ts` の `links.blog`。空文字にすると非表示。

## Cloudflare Pages へのデプロイ

静的サイトなのでアダプタ不要。ドメインは `arigatouapps.com`。

### 方法A: Wrangler で直接アップロード（初回・手軽）

```bash
npx wrangler login                 # ブラウザが開きCloudflare認証（初回のみ）
npm run deploy                     # build → dist/ を arigatouapps プロジェクトへ
```

`wrangler login` は対話式なので、Claude Code では `! npx wrangler login` のように
`!` を付けてこのセッションで実行するとブラウザ認証できる。

### 方法B: GitHub 連携（継続的デプロイ向け・推奨）

1. このプロジェクトを GitHub リポジトリに push。
2. Cloudflare ダッシュボード → **Workers & Pages** → **Create** → **Pages** → Git連携。
3. ビルド設定: **Build command** `npm run build` / **Output** `dist` / **Preset** Astro。

### カスタムドメイン

デプロイ後、Pages プロジェクトの **Custom domains** でルート（`arigatouapps.com`）を割り当て。
既存の `kabu.` / `vizfy.` サブドメインの DNS はそのままで影響なし。

> ブログは将来 `blog.arigatouapps.com` に別プロジェクトとして立てる想定。
> 本サイトからはリンクのみ（`site.ts` の `links.blog`）。
