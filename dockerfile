#pull official base image
FROM node:14-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . .
CMD ["npm","start"]