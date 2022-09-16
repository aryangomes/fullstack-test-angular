FROM node:14.15.0 as build-step
WORKDIR /app

RUN npm cache clean --force
RUN rm -rf node_modules
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start
