# GA-cases（GitHub Actions Cases）

GitHub Actions のワークフロー学習用ケース集です。
公開リポジトリで初見の人にも伝わるよう、ここでは `GA` を `GitHub Actions` の略として扱います。

## ケース一覧

- `simple-build/`
  - JavaScript の基本ビルド（lint / build / artifact）
- `Go/`
  - Go の最小 CI（setup + test + cache）
- `Next.js-app-deploy/`
  - Next.js イメージをビルドして ECR に push
- `build-deploy-ecr/`
  - 言語別の ECR デプロイパターン（JavaScript / Laravel）
- `terraform-plan-diff-template/`
  - PR 起点で Terraform plan を行う reusable workflow テンプレート
- `terraform-fmt-template/`
  - PR 起点で Terraform fmt チェックを行うテンプレート

## 命名ルール（このフォルダでの推奨）

- 1ケース = 1ディレクトリ
- workflow は `.github/workflows/` に置く
- 各ケースに `README.md` を置き、前提 Secrets を明記する
