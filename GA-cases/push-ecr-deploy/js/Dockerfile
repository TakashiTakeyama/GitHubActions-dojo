# ベースイメージとしてNode.jsを使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# パッケージマネージャーファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci --only=production

# ビルド済みのアプリケーションをコピー
COPY dist/ ./dist/

# アプリケーションのポートを公開
EXPOSE 3000

# ヘルスチェック設定
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# コンテナ起動時にアプリケーションを実行
CMD ["node", "dist/index.js"] 