# Use a newer Node.js runtime as a parent image
FROM node:18-alpine

# Install Bash
RUN apk update && apk add --no-cache bash

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist", "-p", "5000"]
