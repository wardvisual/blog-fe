FROM node:18.17.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g @angular/cli@16.2.1
RUN npm install

COPY . .

EXPOSE 4200/tcp

CMD ng serve --host=0.0.0.0 --hmr=true
