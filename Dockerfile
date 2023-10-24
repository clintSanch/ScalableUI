FROM node:18-alpine

WORKDIR /scalable-ui

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

EXPOSE 8000/tcp
EXPOSE 8000/udp

CMD [ "npm", "start" ]