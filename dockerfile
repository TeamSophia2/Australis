#pull official base image
FROM node:16-alpine as contru
WORKDIR '/app'
#COPY package.json .
COPY package*.json /app/

RUN npm install
COPY ./ /app/
#COPY . .
#CMD ["npm","start"]
RUN npm run build

FROM nginx:1.15
RUN rm -rf /usr/share/nginx/html/*
COPY --from=contru /app/build/ /usr/share/nginx/html
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
#RUN rm -rf /usr/share/nginx/html/*
#EXPOSE 3000 80
#ENTRYPOINT ["nginx", "-g", "daemon off;"








