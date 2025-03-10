FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY dist/ ./dist/

EXPOSE 3000

CMD ["node", "dist/index.js"] 