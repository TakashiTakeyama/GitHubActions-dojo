# Repository Map

`GitHubActions-dojo` は、単なる workflow 置き場ではなく、実務に転用しやすいパターンと判断材料をまとめるためのリポジトリです。

## 目的別インデックス

### CI / 品質確認

- `ga-patterns/simple-build/`
  - Node.js の最小 build パイプライン
- `ga-patterns/Go/`
  - Go の最小 CI
- `ga-patterns/terraform-fmt-template/`
  - Terraform 変更時だけ fmt を実行する軽量チェック

### Build / Deploy

- `ga-patterns/build-deploy-ecr/`
  - ECR へ Docker イメージを push するパターン集
- `ga-patterns/Next.js-app-deploy/`
  - Next.js を ECR へ push するシンプルなテンプレート

### Terraform 運用

- `ga-patterns/terraform-plan-diff-template/`
  - PR ごとの plan と reusable workflow の組み合わせ

### Release 管理

- `ga-patterns/release-pr-template/`
  - `develop -> main` の Release PR を自動作成・更新

### コンテナ設計

- `docker-patterns/javascript/`
- `docker-patterns/php/`
- `docker-patterns/Go/`
- `docker-patterns/Next.js/`
- `docker-patterns/Laravel/`

## 再利用レベルの考え方

### そのままコピーしやすいパターン

- `simple-build`
- `Go`
- `release-pr-template`
- `terraform-fmt-template`

### 周辺ファイルごとコピーするパターン

- `build-deploy-ecr`
- `Next.js-app-deploy`
- `terraform-plan-diff-template`

### 共有コンポーネントを前提にしたパターン

- `.github/actions/ecr-build-push/action.yml`
  - ECR build/push 共通処理を composite action 化したもの

## 設計の方針

- まずは単体で読めること
- 同時に、共通処理は reusable workflow や composite action に寄せること
- README には「いつ使うか」「なぜこの設計か」「代替案は何か」も残すこと
