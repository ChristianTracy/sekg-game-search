FROM node:12

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]