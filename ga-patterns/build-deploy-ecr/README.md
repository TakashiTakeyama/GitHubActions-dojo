# build-deploy-ecr

Docker イメージをビルドして Amazon ECR へ push するための知見とテンプレートをまとめたパターン群です。

## 目的

言語やアプリケーション特性が異なっても、ECR push の設計判断を比較できるようにすることを目的にしています。

## このパターン群が向く場面

- ECR push の基本形を見たい
- Access Key ベースと OIDC ベースの差分を見たい
- workflow 単体から composite action への共通化の流れを確認したい

## 含まれるサブパターン

- `JavaScript/`
  - Node.js アプリの build + ECR push
  - 旧来版と composite action 利用版（`_v2`）を比較可能
- `Laravel/`
  - Laravel アプリを対象にした ECR push テンプレート

## 前提

- GitHub Secrets と AWS IAM ロールの準備が必要
- OIDC を使うパターンでは `id-token: write` 権限が必要
- composite action 利用版では `.github/actions/ecr-build-push/action.yml` も合わせて利用する

## 設計ポイント

- AWS 連携（Access Key / OIDC）
- Docker build / tag / push の基本
- GitHub Actions の環境変数・Secrets の扱い
- 共通 step 群を composite action に寄せる考え方

## 代替案

- 各 workflow に build/push の step を直接書く
- ECR push 専用の reusable workflow に寄せる
- build だけ GitHub Actions、push は別 CD に分離する
