FROM node:latest

RUN mkdir -p /aws/app
WORKDIR /aws

COPY ./package.json ./
COPY ./app ./app/

RUN npm i

EXPOSE 3000/tcp

CMD ["npm", "run", "dev"]
