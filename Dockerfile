FROM debian:latest

RUN apt-get update && apt-get install -y \
    curl

WORKDIR /user/src/app

COPY package.json ./

RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get update && apt-get install -y nodejs

RUN npm -v
RUN node -v
RUN npm update
RUN npm install package.json

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "serve" ]