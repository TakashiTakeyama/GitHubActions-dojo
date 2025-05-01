# ECR デプロイケース

## 概要

Dockerイメージを作成して、Amazon ECRにプッシュするパイプライン

## パイプラインの流れ

1. コードのチェックアウト
2. npm キャッシュの設定
3. Node.js のセットアップ
4. 依存関係のインストール、Lint、テストの実行
5. AWS 認証（OIDC）の設定
6. Docker Buildx のセットアップ
7. Docker イメージのビルド、タグ付け、プッシュ（キャッシュ機能付き）

## 必要な設定

### GitHub Secrets

以下の値を GitHub Secrets に設定する必要があります：

- `AWS_ACCOUNT_ID`: AWS アカウント ID

### AWS IAM の設定

GitHub Actions から AWS への認証には OIDC (OpenID Connect) を使用します：

1. AWS IAM で GitHub Actions 用のロール（例: `GitHubActionsECRPush`）を作成
2. 信頼関係に GitHub の OIDC プロバイダーを追加
3. ECR へのプッシュ権限を持つポリシーをアタッチ

## ワークフローファイル

`.github/workflows/dev/build-deploy-ecr-dev_v2.yml`

## 使用方法

1. ECR リポジトリを用意する
2. GitHub Secrets に必要な環境変数を設定します
3. AWS IAM で適切なロールとポリシーを設定します
4. `dev`ブランチにプッシュすると、ワークフローが自動的に実行されます

## ワークフローの特徴

- **OIDC 認証**: 長期的なアクセスキーを使わず、一時的な認証情報を使用するセキュアな方法
- **ビルドキャッシュ**: Docker レイヤーのキャッシュを活用して、ビルド時間を短縮
- **自動テスト**: コードの品質確保のため、Lint とテストを自動実行
- **効率的なタグ付け**: コミット SHA と latest の両方のタグを使用
