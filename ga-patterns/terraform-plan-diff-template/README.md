# terraform-plan-diff-template

Terraform の `plan` を Pull Request 単位で実行するための、汎用 GitHub Actions テンプレートです。

## 目的

PR ごとに Terraform の差分を確認できるようにしつつ、複数環境への展開は reusable workflow で共通化するパターンです。

## このパターンが向く場面

- dev / prod など複数環境に同じ plan ロジックを適用したい
- matrix と reusable workflow を併用したい
- Environment 保護や将来の承認フローを見据えたい

## 含まれるファイル

- `.github/workflows/terraform-plan-diff-template.yml`
  - PR イベントで `main` / `develop` を判定し、環境別に reusable workflow を呼び出します。
- `.github/workflows/terraform-plan-reusable-workflow.yml`
  - `workflow_call` で受けた入力値を使って `fmt` / `init` / `validate` / `plan` を実行します。

## 前提

- Terraform を実行するディレクトリ構成が整理されていること
- 認証方式を `terraform init` 前に追加できること
- plan 対象ごとに適切な GitHub Environment を設計できること

## 設計ポイント

- job 単位の再利用なので reusable workflow を採用している
- `matrix.include` で環境差分を定義し、plan ロジック本体の重複を避けている
- artifact 化した `plan.txt` を後段の共有や確認に流用しやすい

## 代替案

- 環境ごとに個別 workflow を持つ
- plan だけを単一 job で書き切る
- reusable workflow ではなく composite action で step だけ共通化する

## カスタマイズポイント

- `matrix.include` の環境一覧
- `working_directory`
- Terraform バージョン
- OIDC や cloud credential の差し込み

## 使い方

1. 2つの workflow を利用したいリポジトリの `.github/workflows/` にコピーする
2. `working_directory` を Terraform の実ディレクトリに合わせる
3. 必要に応じて `terraform_version`、`matrix.include` の環境定義を変更する
4. 認証方式（OIDC / AWS role / cloud credential）を `Terraform init` 前に追加する

## 補足

- PR コメントに `plan.txt` を投稿する
- `paths` フィルタで Terraform 変更時のみ実行する
- `production` のみ reviewer 承認必須の Environment 保護を有効化する
