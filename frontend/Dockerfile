FROM node:14.16.0-alpine3.10

WORKDIR /usr/app/

COPY package*.json ./
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY package.json /usr/src/app/package.json
RUN npm install -qy

COPY . .

CMD ["npm", "start"]