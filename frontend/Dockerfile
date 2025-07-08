# Step 1: Build React app
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React files
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
