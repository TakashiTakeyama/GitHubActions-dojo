# build-deploy-ecr / JavaScript

## 目的

JavaScript アプリケーションを build したうえで、Docker イメージを Amazon ECR に push するパターンです。

## このパターンが向く場面

- Node.js の quality check と ECR push を 1 つの workflow で回したい
- Access Key ベースの旧来構成と OIDC + composite action 構成を比較したい

## 含まれるファイル

- `.github/workflows/build-deploy-ecr-dev.yml`
  - Access Key ベースのシンプルな版
- `.github/workflows/build-deploy-ecr-dev-v2.yml`
  - OIDC と composite action を使った推奨版
- `../../../.github/actions/ecr-build-push/action.yml`
  - 推奨版で利用する shared composite action

## 前提

- GitHub Secrets に `AWS_ACCOUNT_ID` を設定する
- 推奨版では AWS 側で `GitHubActionsECRPush` ロールを作成し、OIDC 連携を許可する
- `npm ci`、`npm run lint`、`npm test` が実行できること

## 設計ポイント

- 旧来版は比較用として残し、推奨版では OIDC と共通 action を採用している
- 品質チェックを先に実行し、失敗時は ECR push しない構成にしている
- タグ戦略は `sha` と `latest` を基本にしている

## 代替案

- Access Key ベースの単純な workflow を使う
- JavaScript build と ECR push を別 workflow に分離する
- composite action ではなく reusable workflow にまとめる

## カスタマイズポイント

- 実行ブランチ
- Node.js バージョン
- ECR リポジトリ名
- Docker キャッシュ有無

## 使い方

1. 推奨版を使う場合は `build-deploy-ecr-dev-v2.yml` と `.github/actions/ecr-build-push/action.yml` をコピーする
2. `AWS_REGION`、`ECR_REPOSITORY`、IAM ロール ARN を利用先に合わせて調整する
3. `dev` への push または `workflow_dispatch` で実行する
