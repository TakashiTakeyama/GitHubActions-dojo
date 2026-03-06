const express = require("express");
const dotenv = require("dotenv");

// 環境変数の読み込み
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// JSONボディのパース
app.use(express.json());

// ルートエンドポイント
app.get("/", (req, res) => {
  res.json({
    message: "Node.js Docker Sample API",
    version: process.env.npm_package_version,
    environment: process.env.NODE_ENV || "development",
  });
});

// ヘルスチェックエンドポイント
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// エラーハンドリングミドルウェア
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
