# GitHubActions-dojo

GitHub Actions と Docker の実践的な知見・テンプレートをまとめるリポジトリです。
「何のために使うのか」「どこを再利用するのか」が分かる構成で管理しています。

## プロジェクト構造

```text
githubactions-dojo/
├── ga-patterns/                 # GitHub Actions のパターン集
│   ├── README.md                # パターン一覧
│   ├── simple-build/
│   ├── Go/
│   ├── Next.js-app-deploy/
│   ├── build-deploy-ecr/
│   ├── terraform-plan-diff-template/
│   ├── release-pr-template/
│   └── terraform-fmt-template/
├── docker-patterns/             # Docker のパターン集
│   ├── README.md                # パターン一覧
│   ├── javascript/
│   ├── php/
│   ├── Go/
│   ├── Next.js/
│   └── Laravel/
├── .github/actions/             # 複数 workflow で使う shared composite actions
└── docs/                        # 運用方針・テンプレート・分類ガイド
```

## 目的別の見方

- CI / 品質確認
  - `ga-patterns/simple-build/`
  - `ga-patterns/Go/`
  - `ga-patterns/terraform-fmt-template/`
- Build / Deploy
  - `ga-patterns/build-deploy-ecr/`
  - `ga-patterns/Next.js-app-deploy/`
- Terraform 運用
  - `ga-patterns/terraform-plan-diff-template/`
- Release 管理
  - `ga-patterns/release-pr-template/`
- コンテナ設計
  - `docker-patterns/`

## 共有コンポーネント

- `.github/actions/ecr-build-push/action.yml`
  - ECR への build / push を複数 workflow から再利用する composite action

## ドキュメント

- `docs/repository-map.md`
  - 目的別インデックスと再利用レベルの整理
- `docs/reuse-guidelines.md`
  - reusable workflow と composite action の使い分け
- `docs/templates/ga-case-readme-template.md`
  - GitHub Actions パターン README の共通テンプレート
- `docs/templates/docker-case-readme-template.md`
  - Docker パターン README の共通テンプレート

## このリポジトリの方針

- パターン単位で独立して読めること
- workflow は原則 `.github/workflows/` に配置すること
- 共通処理は reusable workflow または composite action に寄せること
- 各 README に「いつ使うか・なぜこの設計か・代替案は何か」を残すこと
