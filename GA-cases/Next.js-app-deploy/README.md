# Next.js アプリデプロイケース

## 概要

このケースでは、GitHub Actions を使用して Next.js アプリケーションの Docker イメージをビルドし、ECR へ push する基本パターンを扱います。

## パイプラインの流れ

1. コードのチェックアウト
2. Node.js のセットアップ
3. 依存関係のインストール
4. Next.js アプリケーションのビルド
5. Docker イメージのビルド
6. デプロイ環境へのデプロイ

## 必要な環境変数

GitHub Secrets に以下の値を設定する必要があります：

- `AWS_ACCOUNT_ID`: AWS アカウント ID

## ワークフローファイル

`.github/workflows/next-app-deploy.yml`

## 使用方法

1. 必要な環境変数を GitHub Secrets に設定します
2. `dev` ブランチに push するとワークフローが自動実行されます
3. `dev` 向け PR がマージされた場合も実行されます
4. 実行結果は GitHub Actions のログで確認できます

## Dockerfile について

このケースでは、Next.js アプリケーション向けの Dockerfile を利用します。必要に応じてマルチステージビルドやタグ戦略を追加してください。
