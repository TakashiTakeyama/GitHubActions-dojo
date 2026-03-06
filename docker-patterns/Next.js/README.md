# Next.js

## 目的

Next.js アプリケーションを Docker コンテナとして実行するための、実務寄りの構成を整理するパターンです。

## このパターンが向く場面

- standalone 出力を使って Next.js の実行イメージを小さくしたい
- Docker Compose で開発環境と本番相当環境の両方を試したい

## 主な構成

- `Dockerfile`
- `docker-compose.yml`
- `.env.local.example`
- `src/`

## 設計ポイント

- `deps`、`builder`、`runner` に分けたマルチステージビルド
- `.next/standalone` と `.next/static` を使った軽量な実行構成
- 非 root ユーザーでの実行とヘルスチェックを含む
- Node.js バージョンや実行時環境変数を調整しやすい

## 代替案

- standalone を使わず通常 build 出力をそのまま載せる
- 開発用は bind mount 前提の compose 構成に寄せる
- deploy 先に合わせて distroless や slim ベースへ切り替える

## 使い方

1. ローカル開発を始める

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

2. Docker Compose で起動する

```bash
docker-compose up next-dev
docker-compose up next-prod
```

3. Docker イメージを直接ビルドして起動する

```bash
docker build -t next-app .
docker run -p 3000:3000 next-app
```

## 注意点

- Next.js の standalone 出力を使う前提なので、設定変更時は Dockerfile も合わせて見直す
- 開発用途と本番用途で必要な環境変数が異なる場合がある
- 本番では監視、ログ出力、プローブ設定を利用先に合わせて調整する
