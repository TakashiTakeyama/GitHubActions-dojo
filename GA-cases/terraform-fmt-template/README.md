# terraform-fmt-template

Terraform の `fmt` チェックを行う最小テンプレートです。

## 目的

- PR で Terraform のフォーマット崩れを検知する
- Terraform 変更がない場合はジョブをスキップし、無駄な実行を減らす

## ワークフローファイル

- `.github/workflows/terraform-fmt-template.yml`

## ポイント

- `dorny/paths-filter` で `*.tf` 変更の有無を判定
- 変更がある時のみ `terraform fmt -check -diff -recursive .` を実行
