# backend/Dockerfile
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del backend
RUN npm install

# Copia el resto de los archivos del backend
COPY . .

# Expone el puerto
EXPOSE 3000

CMD ["npm", "run", "dev"]
