# Next.js-app-deploy

## 目的

Next.js アプリケーションの Docker イメージをビルドし、Amazon ECR へ push する設計パターンです。

## このパターンが向く場面

- Next.js サービスを ECR 経由でデプロイしたい
- OIDC と ECR push の基本形をシンプルに使いたい

## 含まれるファイル

- `.github/workflows/next-app-deploy.yml`
- `../../.github/actions/ecr-build-push/action.yml`

## 前提

- GitHub Secrets に `AWS_ACCOUNT_ID` を設定する
- AWS 側で `GitHubActionsECRPush` ロールを作成し、OIDC 連携を許可する
- 利用先リポジトリに Dockerfile がある

## 設計ポイント

- ECR 認証と build/push は composite action に切り出して共通化している
- `push` と `merged pull_request` の両方を扱い、デプロイ起点を分けやすくしている
- 呼び出し側 workflow ではブランチ条件とリポジトリ固有値だけに集中できる

## 代替案

- workflow 内に ECR login と build/push を直接書く単独構成
- reusable workflow 化して複数の Web アプリから呼び出す構成
- build と deploy を分離し、artifact 経由で後段へ渡す構成

## カスタマイズポイント

- 実行ブランチ
- ECR リポジトリ名
- タグ戦略
- Docker build context や Dockerfile パス

## 使い方

1. `.github/workflows/next-app-deploy.yml` と `.github/actions/ecr-build-push/action.yml` をコピーする
2. `AWS_REGION` と `ECR_REPOSITORY` を利用先に合わせて変更する
3. `AWS_ACCOUNT_ID` と IAM ロールを用意して実行する

## 補足

- Next.js 固有の build 最適化は Dockerfile 側で管理する前提です
- 事前に test や lint を入れたい場合は、この workflow の前段に追加してください
