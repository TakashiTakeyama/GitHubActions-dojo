# Reuse Guidelines

`GitHubActions-dojo` では、workflow を増やす前に「どのパターンを、どの単位で再利用するべきか」を考えます。

## 単一 workflow を選ぶ場面

- 依存する処理が少ない
- 他パターンとの共通処理がまだ明確でない
- まずは最小構成で意図を伝えたい

例:
- `ga-patterns/simple-build/`
- `ga-patterns/release-pr-template/`

## Reusable Workflow を選ぶ場面

- ジョブ単位でまとまった責務を切り出せる
- 呼び出し側から環境やディレクトリを入力で変えたい
- Environment 保護や matrix 展開と相性が良い

例:
- `ga-patterns/terraform-plan-diff-template/.github/workflows/terraform-plan-reusable-workflow.yml`

## Composite Action を選ぶ場面

- 複数 workflow にまたがって同じ step 群を使う
- setup や認証、build など step レベルの共通化が目的
- ジョブ全体ではなく一部の責務だけまとめたい

例:
- `.github/actions/ecr-build-push/action.yml`

## 判断の目安

- 入力が job 全体にまたがるなら reusable workflow
- 同じ step 群を 2 つ以上の workflow で使うなら composite action
- まだ比較対象が少ないなら、先に単一 workflow で意図を固める

## 今後の候補

- Node.js の setup + install + test
- Docker buildx の共通設定
- PR コメント投稿や artifact 整理の共通処理
