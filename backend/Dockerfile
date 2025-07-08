# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

COPY .env.docker .env

EXPOSE 5000
CMD ["node", "index.js"]
