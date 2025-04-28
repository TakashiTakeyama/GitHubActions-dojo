# GitHubActions-dojo

GitHubActions のワークフロー、Dockerfile のサンプルを管理
CI/CD パイプラインのサンプルを管理（予定）

## プロジェクト構造

```
githubactions-dojo/
├── GA-cases/                # GitHubActiosのサンプルケース
│   ├── push-ecr-deploy/     # ECRへのデプロイ用ワークフロー
│   │   ├── .github/
│   │   │   └── workflows/
│   │   └── README.md
│   ├── simple-build/
│   │   ├── .github/
│   │   │   └── workflows/
│   │   └── README.md
│   └── next-app-deploy/     # Next.js用ワークフロー
│       ├── .github/
│       │   └── workflows/
│       └── README.md
├── Docker-cases/            # Dockerfileのサンプル
└── README.md
```
