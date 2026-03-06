# ecr-build-push

## 目的

Amazon ECR への Docker build / push に必要な共通 step 群を、composite action として再利用できる形にまとめています。

## この action が向く場面

- 複数の workflow で同じ ECR push 処理を使いたい
- OIDC 認証、ECR ログイン、buildx 設定を毎回書きたくない

## 入力

- `aws-region`
- `role-to-assume`
- `ecr-repository`
- `image-tags`
- `context`
- `dockerfile`
- `push`
- `cache-tag`

## 出力

- `digest`
- `registry`

## 使い方

```yaml
- name: Build and push image to ECR
  uses: ./.github/actions/ecr-build-push
  with:
    aws-region: ap-northeast-1
    role-to-assume: arn:aws:iam::${{ secrets.AWS_ACCOUNT_ID }}:role/GitHubActionsECRPush
    ecr-repository: sample-app
    image-tags: |
      ${{ github.sha }}
      latest
    cache-tag: cache
```

## 注意点

- 呼び出し側 job には `id-token: write` と `contents: read` が必要です
- 利用先リポジトリへコピーする場合は、workflow と一緒に `.github/actions/ecr-build-push/` もコピーしてください
