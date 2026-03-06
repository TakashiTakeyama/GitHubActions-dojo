# build-deploy-ecr / Laravel

## 目的

Laravel プロジェクト向けに、Docker イメージをビルドして Amazon ECR へ push するテンプレートを整理するパターンです。

## このパターンが向く場面

- Laravel アプリをコンテナ化して AWS 側に渡したい
- OIDC ベースで認証し、長期アクセスキーを使わずに運用したい

## 含まれるファイル

- `.github/workflows/build-deploy-ecr-dev.yml`
- `../../../.github/actions/ecr-build-push/action.yml`

## 前提

- GitHub Secrets に `AWS_ACCOUNT_ID` を設定する
- AWS 側で `GitHubActionsECRPush` ロールを作成し、OIDC 連携を許可する
- 利用先リポジトリに Laravel 用 Dockerfile がある

## 設計ポイント

- ECR 認証と build/push は composite action に寄せている
- Laravel 固有の処理は Dockerfile 側へ寄せ、workflow はデプロイ責務に絞っている

## 代替案

- workflow に ECR 認証と push を直接書く
- アプリ build、test、image push を別ジョブに分ける
- reusable workflow に切り出して他 PHP 系サービスと共通化する

## カスタマイズポイント

- 実行ブランチ
- ECR リポジトリ名
- Dockerfile パス

## 使い方

1. `.github/workflows/build-deploy-ecr-dev.yml` と `.github/actions/ecr-build-push/action.yml` をコピーする
2. `AWS_REGION` と `ECR_REPOSITORY` を利用先に合わせて変更する
3. IAM ロールと Secrets を準備して実行する
