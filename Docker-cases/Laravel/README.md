# Laravel Docker と GitHub Actions の設定例

このリポジトリでは、Laravel アプリケーションを Docker コンテナで実行し、GitHub Actions を使用して CI/CD パイプラインを構築する方法の例を示しています。

## 構成

- PHP 8.1 + Laravel
- Nginx
- MySQL 8.0

## フォルダ構造

```
Laravel/
├── .github/
│   └── workflows/
│       └── laravel-ci.yml    # GitHub Actions ワークフロー設定
├── nginx/
│   ├── Dockerfile            # Nginx用のDockerfile
│   └── default.conf          # Nginxの設定ファイル
├── src/                      # Laravelアプリケーションのソースコード
├── Dockerfile                # LaravelアプリケーションのDockerfile
├── docker-compose.yml        # 開発環境用のDocker Compose設定
└── README.md                 # このファイル
```

## 開発環境のセットアップ

1. リポジトリをクローンします:

```bash
git clone <リポジトリURL>
cd Laravel
```

2. Laravel プロジェクトを src ディレクトリに作成します:

```bash
composer create-project laravel/laravel src
```

3. Docker コンテナを起動します:

```bash
docker-compose up -d
```

4. ブラウザで `http://localhost:8000` にアクセスしてアプリケーションを確認できます。

## GitHub Actions について

このプロジェクトには、GitHub Actions の設定ファイル（`.github/workflows/laravel-ci.yml`）が含まれています。このワークフローは以下の処理を行います:

1. PHP と Laravel の依存関係をセットアップ
2. ユニットテストとフィーチャーテストを実行
3. テストが成功した場合（main ブランチへのプッシュのみ）、Docker イメージをビルドして Docker Hub にプッシュ

GitHub Actions を使用するには、以下のシークレットをリポジトリに設定する必要があります:

- `DOCKER_HUB_USERNAME`: Docker Hub のユーザー名
- `DOCKER_HUB_ACCESS_TOKEN`: Docker Hub のアクセストークン
