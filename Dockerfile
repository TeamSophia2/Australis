#descarga la imagen version 16 de node  
#la nombramos como escenario de contruccion
FROM node:16-alpine as build-stage
#se marca '/app' como directorio de trabajo dentro del contenedor
WORKDIR '/app'
#Copia los archivos de dependencias a /app dentro del contenedor
COPY package*.json /app/
#corre el comando npm install  en el contenedor.
RUN npm install
#copia todo el proyecto al /app
COPY ./ /app/
#ejecuta el comandado para contruir la aplicacion dentro del contenedor
RUN npm run build
#descarga la imagen version 1.5 de nginx 
FROM nginx:1.15
#eliminamos el archivo de prueba de nginx
RUN rm -rf /usr/share/nginx/html/*
# copiamos el contenido de la carpeta build al directorio que sive las páginas
COPY --from=contru /app/build/ /usr/share/nginx/html





