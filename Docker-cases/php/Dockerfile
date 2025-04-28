# PHP 8.2とApacheをベースイメージとして使用
FROM php:8.2-apache

# システムパッケージとPHP拡張機能のインストール
RUN apt-get update && apt-get install -y \
    libzip-dev \  # ZIP拡張機能の依存関係
    zip \         # ZIPファイル操作
    unzip \       # ZIPファイル解凍
    git \         # Git
    curl \        # cURL
    && docker-php-ext-install zip pdo pdo_mysql  # PHP拡張機能のインストール

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Apacheの設定
ENV APACHE_DOCUMENT_ROOT /var/www/html/public  # ドキュメントルートの設定
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf  # ドキュメントルートのパスを更新
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf  # Apache設定の更新
RUN a2enmod rewrite  # mod_rewriteを有効化

# 作業ディレクトリの設定
WORKDIR /var/www/html

# 本番環境用の設定
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"  # 本番環境用のPHP設定を使用

# アプリケーションのタイムゾーン設定
RUN echo "date.timezone = Asia/Tokyo" > /usr/local/etc/php/conf.d/timezone.ini  # タイムゾーンを東京に設定

# ポート公開
EXPOSE 80  # 80ポートを公開

# コンテナ起動時のコマンド
CMD ["apache2-foreground"]  # Apacheをフォアグラウンドで起動 