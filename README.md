# GitHubActions-dojo

GitHub Actions と Docker の学習用サンプル集です。
「どのケースが何を意図しているか」が分かる構成で管理しています。

## プロジェクト構造

```text
githubactions-dojo/
├── GA-cases/                    # GitHub Actions のケース（GA = GitHub Actions）
│   ├── README.md                # ケース一覧
│   ├── simple-build/
│   ├── Go/
│   ├── Next.js-app-deploy/
│   ├── build-deploy-ecr/
│   └── terraform-plan-diff-template/
├── Docker-cases/                # Docker のケース
│   ├── README.md                # ケース一覧
│   ├── javascript/
│   ├── php/
│   ├── Go/
│   ├── Next.js/
│   └── Laravel/
└── README.md
```

> 補足: `GA-cases` は歴史的なディレクトリ名です。  
> 意味は **GitHub Actions Cases** で、ワークフローの学習サンプルをまとめています。

## このリポジトリの方針

- ケース単位で独立して読めること
- workflow は原則 `.github/workflows/` に配置すること
- 各ケースの README に「目的・前提・実行方法」を書くこと
