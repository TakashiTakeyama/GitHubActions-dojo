# GitHubActions-dojo

GitHubActions のワークフロー、Dockerfile を管理
CI/CD パイプラインのサンプルを管理

## プロジェクト構造

```
githubactions-dojo/
├── GA-cases/                # GitHubActiosのケース
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
├── Docker-cases/            # サンプルのDockerfile
└── README.md       
```
