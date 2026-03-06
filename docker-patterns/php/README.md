# php

## 目的

PHP アプリケーション向けのマルチステージ Docker 構成を整理するパターンです。

## このパターンが向く場面

- Composer 依存を含む PHP アプリをコンテナ化したい
- 開発時は `docker-compose`、本番では軽量イメージを使いたい

## 主な構成

- `Dockerfile`
- `docker-compose.yml`
- `src/`

## 設計ポイント

- Composer 依存のインストールと実行環境をステージ分離している
- キャッシュ効率を上げるため、依存定義ファイルを先にコピーする構成にしている
- 実行ユーザーは `www-data` を前提にし、非 root 実行を意識している

## 代替案

- 開発用として単一ステージの PHP イメージに寄せる
- Nginx や FPM を別コンテナへ分離する
- ベースイメージを Debian 系にして拡張導入を簡単にする

## 使い方

1. アプリケーションを起動する

```bash
docker-compose up
```

2. バックグラウンドで起動する

```bash
docker-compose up -d
```

3. 停止する

```bash
docker-compose down
```

## 注意点

- アプリケーションは 80 ポートを前提にしている
- 本番運用では `EXPOSE`、`CMD`、PHP 拡張の有無を見直す
- `composer.json` と `composer.lock` の更新がキャッシュに影響する
