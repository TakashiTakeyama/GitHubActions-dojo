# ベースイメージのバージョンを引数で指定（例：18）
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine AS base

##############################
# 依存関係インストールステージ
##############################
FROM base AS deps
WORKDIR /app

# 依存関係のインストールに必要なツールを追加（例：libc6-compat）
RUN apk add --no-cache libc6-compat

# package.json とロックファイルのみをコピーしてキャッシュを活用
COPY package.json package-lock.json* ./

# 依存関係を厳格にインストール（失敗時はフォールバック） node_modulesが無ければ作成される
RUN npm ci || npm install

##############################
# ビルドステージ（スタンドアロンモード対応）
##############################
FROM base AS builder
WORKDIR /app

# 依存関係を前のステージからコピー
COPY --from=deps /app/node_modules ./node_modules
# ソースコード全体をコピー
COPY . .

# publicディレクトリが存在しない場合は作成（静的ファイル用）
RUN mkdir -p public

# Next.js アプリケーションをビルド
# ※スタンドアロンモードが有効な Next.js のバージョンの場合、
#    必要な実行ファイル（server.js 等）が .next/standalone に生成される
RUN npm run build

##############################
# 実行ステージ（軽量・最小限の成果物のみコピー）
##############################
FROM base AS runner
WORKDIR /app

# 本番環境用の環境変数を設定
ENV NODE_ENV=production

# セキュリティ向上のため、非rootユーザーを作成
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# スタンドアロンモードで生成された成果物のみコピー
# ※静的ファイル：public ディレクトリ
COPY --from=builder /app/public ./public
# ※サーバー実行に必要なファイル（standalone 出力）と静的アセット
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# package.json も必要な場合にコピー
COPY --from=builder /app/package.json ./package.json

# ファイルの所有権を非rootユーザーに変更
RUN chown -R nextjs:nodejs /app

# 非rootユーザーに切り替え
USER nextjs

# ポートを公開
EXPOSE 3000

# 実行時用の環境変数
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# ヘルスチェックの設定（30秒毎に localhost:3000 をチェック）
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# コンテナ起動時にスタンドアロンモードで生成されたサーバーを起動
CMD ["node", "server.js"]
