FROM php:8.1-fpm

# システム依存パッケージのインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# PHPの拡張機能をインストール
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 作業ディレクトリの設定
WORKDIR /var/www/html

# アプリケーションファイルをコピー
COPY ./src /var/www/html

# 依存関係のインストール
RUN composer install --optimize-autoloader --no-interaction --no-progress

# 適切な権限を設定
RUN chown -R www-data:www-data /var/www/html

# コンテナが起動した時に実行されるコマンド
CMD ["php-fpm"]

EXPOSE 9000 