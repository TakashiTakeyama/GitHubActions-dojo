# docker-patterns

Dockerfile / docker-compose の知見とテンプレートを整理するパターン集です。

## 目的別インデックス

### アプリ実行用コンテナ

- `javascript/`
  - Node.js アプリ向けの基本 Dockerfile
- `php/`
  - PHP アプリ向けのマルチステージビルド
- `Go/`
  - 軽量な Go 実行イメージ

### フレームワーク別構成

- `Next.js/`
  - Next.js の standalone 実行を意識した構成
- `Laravel/`
  - Laravel + Nginx + MySQL を含む開発構成

## README の見方

- まず `目的` と `設計ポイント` を見て採用可否を判断する
- 次に `このパターンが向く場面` と `代替案` を見て、他案との違いを確認する
- 次に `使い方` を見てローカル検証を行う
- 本番向けに使う場合は `注意点` の項目を必ず確認する
