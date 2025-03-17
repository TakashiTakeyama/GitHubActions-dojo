# ビルドステージ
# Node.js 18のAlpineイメージを使用
FROM node:18-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# アプリケーションをビルド（必要な場合）
RUN npm run build

# 実行ステージ
# Node.js 18のAlpineイメージを使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のファイルをコピー
COPY package*.json ./

# 本番環境用の依存関係のみをインストール
RUN npm ci --only=production

# ビルドステージからビルド済みファイルをコピー
COPY --from=builder /app/dist ./dist

# アプリケーションのユーザーを作成
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# コンテナのポートを公開
EXPOSE 3000

# アプリケーションを実行
CMD ["node", "dist/index.js"] 