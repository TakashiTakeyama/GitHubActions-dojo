# GitHubActions-dojo

## 概要

このリポジトリは、GitHub Actions を使用したさまざまな CI/CD パイプラインのサンプルを提供します。各ケースは独立したディレクトリに配置され、それぞれ異なるシナリオに対応しています。

## 利用可能なケース

| ケース名               | 説明                                                                 | リンク                                    |
| ---------------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| push-ecr-deploy           | JavaScript アプリをビルドし、Docker イメージを Amazon ECR にプッシュ | [詳細](./cases/push-ecr-deploy/README.md) |
| simple-build         | JavaScript アプリをビルドし、成果物をアーティファクトとして保存      | [詳細](./cases/simple-build/README.md)    |
| next-app-deploy | Next.js アプリケーションをビルドしてデプロイ                         | [詳細](./cases/next-app-deploy/README.md) |


## 新しいケースの追加方法

1. `cases/`ディレクトリに新しいケースのディレクトリを作成
2. `.github/workflows/`ディレクトリにワークフローファイルを作成
3. `README.md`ファイルにケースの説明を記載
4. メインの`README.md`にケースを追加
