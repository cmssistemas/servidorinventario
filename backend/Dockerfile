FROM node:22-alpine

WORKDIR /app

# 1. Copiamos solo los paquetes primero para aprovechar la caché de Node
COPY package*.json ./

# 2. Instalamos las dependencias (el script postinstall ya no fallará si lo quitamos del package.json)
RUN npm install

# 3. Copiamos TODO el código fuente del backend (aquí ya viaja la carpeta prisma/)
COPY . .

# Definimos un DATABASE_URL temporal para que la fase de build no falle
RUN DATABASE_URL="postgresql://temp:temp@localhost:5432/temp" npx prisma generate --schema=prisma/schema.prisma

EXPOSE 5000

CMD ["npm", "run", "dev"]
