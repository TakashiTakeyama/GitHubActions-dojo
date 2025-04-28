# ビルドステージ
# golang:1.21-alpineをベースイメージとして使用
FROM golang:1.21-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のファイルをコピー
COPY go.mod go.sum ./

# 依存関係をダウンロード
RUN go mod download

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
# CGOを無効化し、静的リンクを有効化
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# 実行ステージ
# 軽量なalpineイメージを使用
FROM alpine:latest

# 作業ディレクトリを設定
WORKDIR /app

# ビルドステージから実行ファイルをコピー
COPY --from=builder /app/main .

# コンテナのポートを公開
EXPOSE 8080

# アプリケーションを実行
CMD ["./main"] 