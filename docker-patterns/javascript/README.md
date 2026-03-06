# javascript

## 目的

Node.js アプリケーション向けの基本 Dockerfile 構成を整理するパターンです。

## このパターンが向く場面

- Node.js サービスを軽量な本番イメージとして配布したい
- マルチステージビルドと非 root 実行の基本を押さえたい

## 主な構成

- `Dockerfile`

## 設計ポイント

- マルチステージビルドを使い、ビルド環境と実行環境を分離している
- Alpine ベースでイメージサイズを抑えている
- 本番実行では非 root ユーザーを想定している

## 代替案

- 単一ステージで素早く作る開発用 Dockerfile
- distroless や slim ベースイメージを使う
- Node.js バージョン固定を build arg に切り出す

## 使い方

1. イメージをビルドする

```bash
docker build -t nodejs-app .
```

2. コンテナを起動する

```bash
docker run -p 3000:3000 nodejs-app
```

## 注意点

- アプリケーションは 3000 ポートでリッスンする前提
- `build` スクリプトの有無に応じて Dockerfile を調整する
- 本番運用では `EXPOSE`、`CMD`、ヘルスチェックを見直す
