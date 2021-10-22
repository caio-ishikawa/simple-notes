FROM node:14.16.0-alpine3.10

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -qyg nodemon@2.0.7
RUN npm install -qy

COPY . .

CMD ["npm", "start"]