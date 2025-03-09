# GitHubActions-dojo

## 概要

このリポジトリは、GitHub Actions を使用したさまざまな CI/CD パイプラインのサンプルを提供します。各ケースは独立したディレクトリに配置され、それぞれ異なるシナリオに対応しています。

## 利用可能なケース

| ケース名       | 説明                                                                 | リンク                                 |
| -------------- | -------------------------------------------------------------------- | -------------------------------------- |
| ECR デプロイ   | JavaScript アプリをビルドし、Docker イメージを Amazon ECR にプッシュ | [詳細](./cases/ecr-deploy/README.md)   |
| シンプルビルド | JavaScript アプリをビルドし、成果物をアーティファクトとして保存      | [詳細](./cases/simple-build/README.md) |

## 共通のソースコード

各ケースは同じ JavaScript アプリケーションを使用しています。ソースコードは以下の場所にあります：

- `src/index.js` - メインの JavaScript ファイル
- `package.json` - プロジェクト設定とビルドスクリプト
- `Dockerfile` - Docker イメージ作成用の設定ファイル

## 新しいケースの追加方法

1. `cases/`ディレクトリに新しいケースのディレクトリを作成
2. `.github/workflows/`ディレクトリにワークフローファイルを作成
3. `README.md`ファイルにケースの説明を記載
4. メインの`README.md`にケースを追加

## ローカルでの実行方法

```bash
# 依存関係のインストール
npm install

# ビルド
npm run build

# Dockerイメージのビルド（ECRデプロイケースの場合）
docker build -t js-app .

# Dockerコンテナの実行
docker run -p 3000:3000 js-app
```
