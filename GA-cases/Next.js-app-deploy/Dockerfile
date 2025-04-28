# ベースイメージとしてNode.jsを使用
FROM node:20-alpine AS base

# 依存関係のインストールステージ
FROM base AS deps
WORKDIR /app

# パッケージマネージャーファイルをコピー
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm ci

# ビルドステージ
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.jsアプリケーションをビルド
RUN npm run build

# 実行ステージ
FROM base AS runner
WORKDIR /app

# プロダクションで利用
ENV NODE_ENV production

# 非rootユーザーを作成して使用
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# ビルド済みのアプリケーションをコピー
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# アプリケーションを起動
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# コンテナ起動時に Next.js の本番サーバーを起動
CMD ["node", "server.js"]
