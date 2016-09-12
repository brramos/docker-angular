FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY gulpfile.js /usr/src/app/
RUN npm install --quiet
RUN npm install -g gulp

EXPOSE 8000
CMD [ "npm", "run", "dev" ]