# Next.js Docker

Next.js アプリケーションを Docker コンテナ化する

## プロジェクト構成

```
.
├── Dockerfile          # Dockerイメージのビルド設定
├── docker-compose.yml  # Docker Compose設定ファイル
├── README.md          # このファイル
├── .env.local.example  # 環境変数のサンプルファイル
├── package.json       # プロジェクトの依存関係
├── next.config.js     # Next.jsの設定ファイル
├── public/            # 静的ファイル配置ディレクトリ
│   ├── favicon.ico    # ファビコン
│   └── robots.txt     # クローラー制御ファイル
└── src/               # アプリケーションのソースコード
    ├── app/          # Next.js 13+ App Router
    └── components/   # 共通コンポーネント
```

## Dockerfile の特徴

このサンプルの Dockerfile は、最新の Next.js スタンドアロンモードを取り入れた最適化構成となっており、以下の点が特徴

1. **マルチステージビルド**  
   - 依存関係のインストール（deps ステージ）、アプリケーションのビルド（builder ステージ）、実行に必要なファイルのみの抽出（runner ステージ）を分離し、イメージサイズを最小化しています。

2. **依存関係のキャッシュ最適化**  
   - `deps` ステージで package.json とロックファイルのみをコピーし、`npm ci` による依存関係のインストールを行うことで、キャッシュの活用とビルドの高速化を実現しています。

3. **Next.js スタンドアロンモードの活用**  
   - ビルド成果物の中から実行に必要な `.next/standalone` および `.next/static` を抽出することで、不要なファイルを含まず、起動速度とセキュリティの最適化を図っています。

4. **セキュリティ強化**  
   - 非 root ユーザー（nextjs）と専用グループ（nodejs）を作成し、実行時の所有権を適切に設定することで、コンテナ内のセキュリティリスクを低減しています。

5. **ヘルスチェック**  
   - 定期的に `wget` を用いて `http://localhost:3000/` をチェックするヘルスチェック設定を含み、サービスの健全性を監視しています。

6. **柔軟な設定**  
   - ビルド引数を使用して Node.js のバージョンをカスタマイズ可能にしており、環境変数（NODE_ENV、PORT、HOSTNAME）の設定により、実行時の挙動を柔軟に変更できる。

## ローカル開発環境での実行

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定（任意）

```bash
cp .env.local.example .env.local
# .env.localを編集して必要な環境変数を設定
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

### 4. アプリケーションへのアクセス

ブラウザで http://localhost:3000 にアクセス

## Docker Compose での使用方法

### 1. 開発モードでの実行

```bash
docker-compose up next-dev
```

### 2. 本番モードでの実行

```bash
docker-compose up next-prod
```

### 3. バックグラウンドでの実行

```bash
docker-compose up -d next-prod
```

### 4. コンテナの停止

```bash
docker-compose down
```

## Docker での使用方法

### 1. 標準的なイメージのビルド

```bash
docker build -t next-app .
```

### 2. カスタム Node.js バージョンでのビルド

```bash
docker build --build-arg NODE_VERSION=16 -t next-app .
```

### 3. コンテナの実行

```bash
docker run -p 3000:3000 next-app
```

### 4. 開発モードでの Docker コンテナ実行

ソースコードの変更をリアルタイムに反映させたい場合：

```bash
docker run -p 3000:3000 -v $(pwd):/app -e NODE_ENV=development next-app npm run dev
```

## 技術スタック

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## ディレクトリ解説

### public/

`public/`ディレクトリは、Next.js アプリケーションにおいて静的ファイルを配置するための特別なフォルダです。ここに配置されたファイルは、ビルドプロセス中に処理されず、Web ルート（`/`）から直接アクセス可能になる

**主な用途:**

- 画像ファイル（JPG、PNG、SVG など）
- フォントファイル
- ファビコン（favicon.ico）
- robots.txt、sitemap.xml
- PWA マニフェストファイル

例えば、`public/images/logo.png`を配置すると、ブラウザからは`/images/logo.png`として、React コンポーネントからは`<img src="/images/logo.png">`としてアクセスできる

### src/
