# Go

## 目的

Go プロジェクト向けの最小 CI を用意し、`setup -> cache -> test` の基本パターンを整理するパターンです。

## このパターンが向く場面

- Go プロジェクトの最初の CI を素早く作りたい
- `go test ./...` とモジュールキャッシュの基本形を押さえたい

## 含まれるファイル

- `.github/workflows/go-sample.yml`

## 前提

- `go.mod` と `go.sum` が存在すること
- GitHub Actions 上で `go test ./...` が通る構成であること

## 設計ポイント

- `actions/setup-go` と `actions/cache` を組み合わせて最小限の高速化を入れている
- `push` と `pull_request` の両方で回しやすい構成にしている

## 代替案

- `golangci-lint` を含む強めの品質ゲートへ拡張する
- matrix で複数 Go バージョンを検証する
- reusable workflow にして複数 Go リポジトリから呼び出す

## カスタマイズポイント

- Go バージョン
- テスト対象のパッケージ範囲
- lint や static analysis の追加

## 使い方

1. `.github/workflows/go-sample.yml` をコピーする
2. Go バージョンと対象ブランチを調整する
3. 必要であれば `golangci-lint` などを追加する
