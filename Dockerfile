FROM node:14-slim

COPY package.json /dist/package.json
COPY .env /dist/.env

ADD . .

WORKDIR /dist

RUN yarn && yarn cache clean && yarn build \
  && mv /bin/src /dist \
  && ls /dist -al


FROM node:14

EXPOSE 3000

COPY --from=0 /dist /nest-boilerplate

WORKDIR /nest-boilerplate

CMD [ "yarn", "docker:prd"]