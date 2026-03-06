# GitHub Actions Pattern README Template

各 GitHub Actions パターン README は、原則として次の見出し構成を使います。

## 目的

- 何を実現する workflow なのか
- どの運用課題を解決するのか

## このパターンが向く場面

- どのようなリポジトリやチーム運用に向くか
- 逆に、どのパターンでは別案を選ぶべきか

## 含まれるファイル

- workflow
- reusable workflow
- composite action
- 補助ドキュメント

## 前提

- 必要な Secrets
- 必要な権限
- 外部サービス側の準備

## 設計ポイント

- 権限最小化
- concurrency
- reusable workflow / composite action の採用理由
- 監査性、再実行性、保守性に関する判断

## 代替案

- もっと単純な workflow で始める場合
- reusable workflow を使う場合
- composite action を使う場合
- 採用しなかった理由

## カスタマイズポイント

- ブランチ名
- 対象ディレクトリ
- タグ戦略
- 通知や承認フロー

## 使い方

1. どのファイルをコピーするか
2. どこを変更するか
3. どう実行するか

## 補足

- 制約
- よくある失敗
- 運用上の注意
