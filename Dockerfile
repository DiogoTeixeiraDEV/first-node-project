
FROM node:18-alpine


WORKDIR /app


COPY package*.json ./
RUN npm install

# Copia todo o código do projeto
COPY . .


EXPOSE 3333

# Comando para rodar a API com hot reload
CMD ["node", "--watch", "--no-warnings", "src/server.js"]
