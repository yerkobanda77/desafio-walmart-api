# Dockerfile
FROM node:14

#Copia los Archivos

COPY . /app

#Instala dependencias.

WORKDIR /app
RUN npm install --production

#Inicia la aplicación.
EXPOSE 8000
ENV TZ=America/Santiago
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


CMD npm run start
#dev qa prod

