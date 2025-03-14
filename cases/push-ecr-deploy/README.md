# ECR デプロイケース

## 概要

このケースでは、GitHub Actions を使用して JavaScript アプリケーションをビルドし、Docker イメージを作成して、Amazon ECR にプッシュするパイプラインを構築します。

## パイプラインの流れ

1. コードのチェックアウト
2. Node.js のセットアップ
3. 依存関係のインストール
4. JavaScript のビルド
5. AWS 認証情報の設定
6. Amazon ECR へのログイン
7. Docker イメージのビルド、タグ付け、プッシュ

## 必要な環境変数

GitHub Secrets に以下の値を設定する必要があります：

- `AWS_ACCESS_KEY_ID`: AWS アクセスキー ID
- `AWS_SECRET_ACCESS_KEY`: AWS シークレットアクセスキー

## ワークフローファイル

`.github/workflows/ecr-deploy.yml`

## 使用方法

1. ECR リポジトリを作成します（名前: `js-app-repo`）
2. GitHub Secrets に必要な環境変数を設定します
3. `dev`ブランチにプッシュすると、ワークフローが自動的に実行されます
