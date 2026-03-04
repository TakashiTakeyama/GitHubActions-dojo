# Laravel ECR デプロイケース

Laravel プロジェクト向けに、Docker イメージをビルドして ECR へ push するテンプレートです。

## ワークフローファイル

- `.github/workflows/build-deploy-ecr-dev.yml`

## 前提

- GitHub Secrets に `AWS_ACCOUNT_ID` を設定
- AWS 側で `GitHubActionsECRPush` ロールを作成し、OIDC 連携を許可
