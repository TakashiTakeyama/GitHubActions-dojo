# PHP Docker

## プロジェクト構成

```
.
├── src/               # アプリケーションのソースコード
├── docker-compose.yml  # Docker Compose設定ファイル
└── Dockerfile          # Dockerイメージのビルド設定
```

## Dockerfile の特徴

この Dockerfile は、PHP アプリケーションの最適化された構成を実現しており、以下の特徴を有する：

1. **マルチステージビルド**

   - 依存関係のインストール（composer ステージ）、アプリケーションのビルド（builder ステージ）、実行に必要なファイルのみの抽出（runner ステージ）を分離し、イメージサイズを最小化する。

2. **依存関係のキャッシュ最適化**

   - `composer` ステージで composer.json と composer.lock のみをコピーし、依存関係のインストールを行うことで、キャッシュの活用とビルドの高速化を実現する。

3. **セキュリティ強化**

   - 非 root ユーザー（www-data）で実行することで、コンテナ内のセキュリティリスクを低減する。

## 使用方法

### 1. アプリケーションの起動

```bash
docker-compose up
```

### 2. バックグラウンドでの実行

```bash
docker-compose up -d
```

### 3. コンテナの停止

```bash
docker-compose down
```

## 注意事項

- アプリケーションは 80 ポートでリッスンすることを想定
- 必要に応じて`EXPOSE`と`CMD`を調整する
- 本番環境では、セキュリティを考慮して非 root ユーザーでの実行を推奨
- `composer.json`に定義された依存関係は、ビルドステージでインストールされる
