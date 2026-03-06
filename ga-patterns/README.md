# ga-patterns（GitHub Actions Patterns）

GitHub Actions のワークフロー知見とテンプレートを整理するパターン集です。
公開リポジトリで初見の人にも伝わるよう、ここでは `GA` を `GitHub Actions` の略として扱います。

## 目的別インデックス

### CI / 品質確認

- `simple-build/`
  - JavaScript の最小 build パイプライン
- `Go/`
  - Go の最小 CI
- `terraform-fmt-template/`
  - Terraform 変更時だけ fmt を実行するテンプレート

### Build / Deploy

- `build-deploy-ecr/`
  - 言語別の ECR デプロイパターンと共通化の比較
- `Next.js-app-deploy/`
  - Next.js イメージを ECR に push するテンプレート

### Terraform 運用

- `terraform-plan-diff-template/`
  - PR 起点で Terraform plan を行う reusable workflow テンプレート

### Release 管理

- `release-pr-template/`
  - `develop -> main` の Release PR を自動作成・更新するテンプレート

## 共有コンポーネント

- `../.github/actions/ecr-build-push/action.yml`
  - ECR build/push を共通化した composite action

## 命名ルール（このフォルダでの推奨）

- 1パターン = 1ディレクトリ
- workflow は `.github/workflows/` に置く
- 各 README に `このパターンが向く場面`、`設計ポイント`、`代替案` を明記する
