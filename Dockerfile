FROM node:lts-alpine

RUN apk add --no-cache git util-linux openssl

RUN npm install -g npm@9.6.1
RUN npm install -g gatsby-cli
RUN gatsby telemetry --disable

RUN gatsby new hh-website https://github.com/HappyHippoAI/hh-website-theme.git

# WORKDIR /hhweb
# COPY package*.json .
# RUN npm install

WORKDIR /hh-website/example-site
#RUN npm install

EXPOSE 8000
CMD ["yarn", "develop", "-H", "0.0.0.0"]