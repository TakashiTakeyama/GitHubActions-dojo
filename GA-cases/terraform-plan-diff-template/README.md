# terraform-plan-diff-template

Terraform の `plan` を Pull Request 単位で実行するための、汎用 GitHub Actions テンプレートです。

## 含まれるファイル

- `.github/workflows/terraform-plan-diff-template.yml`
  - PR イベントで `main` / `develop` を判定し、環境別に reusable workflow を呼び出します。
- `.github/workflows/terraform-plan-reusable-workflow.yml`
  - `workflow_call` で受けた入力値を使って `fmt` / `init` / `validate` / `plan` を実行します。

## 使い方

1. 2つの workflow を利用したいリポジトリの `.github/workflows/` にコピーする
2. `working_directory` を Terraform の実ディレクトリに合わせる
3. 必要に応じて `terraform_version`、`matrix.include` の環境定義を変更する
4. 認証方式（OIDC / AWS role / cloud credential）を `Terraform init` 前に追加する

## カスタマイズの例

- PR コメントに `plan.txt` を投稿する
- `paths` フィルタで Terraform 変更時のみ実行する
- `production` のみ reviewer 承認必須の Environment 保護を有効化する
