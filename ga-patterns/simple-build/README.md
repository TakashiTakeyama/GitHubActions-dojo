# simple-build

## 目的

JavaScript アプリケーションに対して、最小構成の build パイプラインを用意するパターンです。

## このパターンが向く場面

- まずは `checkout -> install -> lint -> build -> artifact` の流れを確認したい
- deploy までは不要だが、ビルド成果物を CI 上で確認したい

## 含まれるファイル

- `.github/workflows/simple-build.yml`

## 前提

- `npm ci` が実行できる `package-lock.json` があること
- `npm run lint` と `npm run build` が定義されていること

## 設計ポイント

- 余計な分岐を持たせず、最小の CI フローに絞っている
- ビルド成果物を artifact として保存し、後続工程なしでも結果を確認できる

## 代替案

- `pull_request` にも広げてレビュー前 CI として使う
- reusable workflow 化して複数 Node.js リポジトリで共通利用する
- test を追加して build 前の品質チェックを強める

## カスタマイズポイント

- 実行ブランチ
- Node.js バージョン
- artifact 名と保存対象

## 使い方

1. `.github/workflows/simple-build.yml` をコピーする
2. Node.js バージョンと対象ブランチを必要に応じて調整する
3. `main` への push、または `workflow_dispatch` で実行する
