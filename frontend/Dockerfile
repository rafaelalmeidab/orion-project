FROM node:18-alpine

WORKDIR /app

# Copiar apenas package.json e lock
COPY package*.json ./

RUN npm install

# Copiar o restante
COPY . .

# Build
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
