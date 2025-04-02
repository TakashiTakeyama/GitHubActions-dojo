# GitHubActions-dojo

GitHubActions のワークフロー、Dockerfile を管理
CI/CD パイプラインのサンプルを管理

## プロジェクト構造

```
githubactions-dojo/
├── cases/                    # 各ユースケースのワークフロー
│   ├── push-ecr-deploy/      # ECRへのデプロイ用ワークフロー
│   │   ├── .github/         # GitHub Actions設定
│   │   │   └── workflows/   # ワークフローファイル
│   │   └── README.md        # ケース説明
│   ├── simple-build/        # シンプルなビルド用ワークフロー
│   │   ├── .github/
│   │   │   └── workflows/
│   │   └── README.md
│   └── next-app-deploy/     # Next.jsアプリデプロイ用ワークフロー
│       ├── .github/
│       │   └── workflows/
│       └── README.md
├── Docker-cases/            # Dockerfileのサンプル
└── README.md               # プロジェクト説明
```

## ケース一覧

| ケース名        | 説明                                                                 | リンク                                    |
| --------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| push-ecr-deploy | JavaScript アプリをビルドし、Docker イメージを Amazon ECR にプッシュ | [詳細](./cases/push-ecr-deploy/README.md) |
| simple-build    | JavaScript アプリをビルドし、成果物をアーティファクトとして保存      | [詳細](./cases/simple-build/README.md)    |
| next-app-deploy | Next.js アプリケーションをビルドしてデプロイ                         | [詳細](./cases/next-app-deploy/README.md) |
