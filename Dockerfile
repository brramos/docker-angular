FROM node:alpine

MAINTAINER brramos

ENV PORT=3001

COPY . /var/www
WORKDIR /var/www

RUN yarn

EXPOSE $PORT

ENTRYPOINT ["yarn", "start"]
