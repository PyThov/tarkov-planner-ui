FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "vite", "serve", "--port", "3000"]
