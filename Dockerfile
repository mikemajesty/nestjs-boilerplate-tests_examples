FROM node:14-slim

COPY package.json /dist/package.json
COPY .env /dist/.env

ADD . /src

WORKDIR /src

RUN yarn && yarn cache clean && yarn build \
  && mv /src/bin/src /dist \
  && mv /src/node_modules /dist/node_modules \
  && mv /src/package.json /dist/package.json \
  && mv /src/.env /dist/.env \
  && ls /dist -al

FROM node:14

EXPOSE 3000

COPY --from=0 /dist /nest-boilerplate

WORKDIR /nest-boilerplate

CMD [ "yarn", "docker:prd"]