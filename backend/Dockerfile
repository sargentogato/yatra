# backend/Dockerfile
FROM node:lts

# Establece el directorio de trabajo en el contenedor
WORKDIR /src

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del backend
RUN npm install

# Copia el resto de los archivos del backend
COPY . .

EXPOSE ${PORT:-3000}

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
