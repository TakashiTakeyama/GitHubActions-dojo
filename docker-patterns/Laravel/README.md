# Laravel

## 目的

Laravel アプリケーションを Docker で実行しつつ、GitHub Actions による CI まで含めて確認できるパターンです。

## このパターンが向く場面

- Laravel + Nginx + MySQL の開発環境をまとめて扱いたい
- アプリ実行だけでなく、CI とイメージ配布の流れも合わせて整理したい

## 主な構成

- `Dockerfile`
- `docker-compose.yml`
- `nginx/`
- `src/`
- `.github/workflows/laravel-ci.yml`

## 設計ポイント

- アプリケーションコンテナと Nginx を分離し、役割を明確にしている
- Docker Compose でローカル開発環境を立ち上げやすくしている
- GitHub Actions ではテスト成功後のイメージ配布まで含めている

## 代替案

- Laravel コンテナ単体で完結する簡易構成
- MySQL を外部マネージドサービスに寄せる構成
- CI とイメージ配布を別 workflow に分離する

## 使い方

1. Laravel プロジェクトを `src/` に用意する

```bash
composer create-project laravel/laravel src
```

2. Docker Compose で起動する

```bash
docker-compose up -d
```

3. ブラウザで `http://localhost:8000` にアクセスする

## 注意点

- GitHub Actions を使う場合は `DOCKER_HUB_USERNAME` と `DOCKER_HUB_ACCESS_TOKEN` が必要
- 本番運用では queue、scheduler、storage 永続化など Laravel 固有の要件を別途整理する
