# terraform-fmt-template

Terraform の `fmt` チェックを行う最小テンプレートです。

## このパターンが向く場面

- Terraform の最小ガードレールを先に入れたい
- plan より前に format 崩れだけを軽く検知したい
- 変更がないときの無駄実行を減らしたい

## 含まれるファイル

- `.github/workflows/terraform-fmt-template.yml`

## 前提

- リポジトリ内に Terraform ファイルが存在すること
- PR ベースで fmt チェックを動かしたいこと

## 設計ポイント

- `dorny/paths-filter` で `*.tf` 変更の有無を判定
- 変更がある時のみ `terraform fmt -check -diff -recursive .` を実行

## 代替案

- `paths-filter` を使わず毎回 fmt を実行する
- fmt に加えて validate まで同じ workflow に含める
- Terraform 用の共通 CI reusable workflow に統合する

## カスタマイズポイント

- 監視対象のパス
- Terraform workflow ファイル自身も検知対象に含めるかどうか
- `workflow_dispatch` の有無

## 使い方

1. `.github/workflows/terraform-fmt-template.yml` をコピーする
2. `paths-filter` の対象パスをリポジトリ構成に合わせて調整する
3. PR を作成して動作を確認する
