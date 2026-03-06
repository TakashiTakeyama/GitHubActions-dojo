# build-deploy-ecr ケース

Docker イメージをビルドして Amazon ECR へ push するための知見とテンプレートをまとめています。

## サブケース

- `JavaScript/`
  - Node.js アプリのビルド + ECR push
  - 通常版と改善版（`_v2`）を比較可能
- `Laravel/`
  - Laravel アプリを対象にした ECR push テンプレート

## 学べるポイント

- AWS 連携（Access Key / OIDC）
- Docker build / tag / push の基本
- GitHub Actions の環境変数・Secrets の扱い
