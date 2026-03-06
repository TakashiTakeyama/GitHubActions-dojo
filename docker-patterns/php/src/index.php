<?php
// データベース接続情報
$host = getenv('DB_HOST');
$dbname = getenv('DB_DATABASE');
$username = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD');

try {
    // データベース接続
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // 接続成功メッセージ
    echo "<h1>データベース接続成功</h1>";
    echo "<p>ホスト: $host</p>";
    echo "<p>データベース: $dbname</p>";
    
} catch(PDOException $e) {
    // エラーメッセージ
    echo "<h1>データベース接続エラー</h1>";
    echo "<p>エラー: " . $e->getMessage() . "</p>";
}
?> 