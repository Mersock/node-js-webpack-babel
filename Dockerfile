FROM node:12-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

ENTRYPOINT [ "npm","run","execute" ]

