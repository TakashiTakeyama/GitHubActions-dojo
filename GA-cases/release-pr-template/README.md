# release-pr-template

`develop` への push を契機に、`main` 向けの Release PR を 1 本だけ作成または更新するための GitHub Actions テンプレートです。

参考元の `create-release-pr.yml` の考え方を踏まえつつ、他リポジトリにも展開しやすい形に整理しています。

## 含まれるファイル

- `.github/workflows/create-release-pr-template.yml`
  - `develop -> main` の差分を見て、既存 Release PR の更新または新規作成を行います。

## このテンプレートで入れているベストプラクティス

- 権限最小化
  - workflow 全体は read 権限、PR 作成・更新ジョブだけ write 権限に分離しています。
- 重複実行の抑止
  - `concurrency` で同じブランチに対する古い実行を自動キャンセルします。
- PR の二重作成防止
  - 先に open 中の Release PR を確認し、存在する場合は `gh pr edit` に切り替えます。
- ブランチ差分の事前チェック
  - `main..develop` に差分がない場合は PR 作成をスキップします。
- PR 一覧の取得をメッセージ依存にしない
  - コミットメッセージ中の `#123` 抽出ではなく、GitHub API でコミットに紐づく PR を取得します。
- フォールバックあり
  - 紐づく PR を取れないケースでは、コミット一覧を本文に出します。
- 手動再実行に対応
  - `workflow_dispatch` を入れて、検証や復旧時に再実行しやすくしています。

## 使い方

1. `.github/workflows/create-release-pr-template.yml` を利用したいリポジトリの `.github/workflows/` にコピーする
2. `BASE_BRANCH` と `HEAD_BRANCH` を自分のブランチ運用に合わせて変更する
3. `on.push.branches` も `HEAD_BRANCH` と一致するように変更する
4. 必要ならタイトル形式や PR 本文テンプレートを調整する

## 注意点

- `GITHUB_TOKEN` で作成した PR では、別の `pull_request` workflow が期待どおり発火しないことがあります。
- PR 作成をトリガーに別 workflow を動かしたい場合は、GitHub App Token や Personal Access Token の利用を検討してください。
