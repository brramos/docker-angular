FROM node:alpine

MAINTAINER brramos

ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN yarn
RUN yarn gulp

EXPOSE $PORT

ENTRYPOINT ["yarn", "start"]
