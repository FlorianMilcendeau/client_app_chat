FROM node:13.12.0-alpine

WORKDIR /usr/src/app

ARG REACT_APP_SERVER_URL=${REACT_APP_SERVER_URL}
ENV REACT_APP_SERVER_URL=${REACT_APP_SERVER_URL}

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]