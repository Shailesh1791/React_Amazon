FROM node:14-alpine

WORKDIR /apps/dev

ARG EXEC_FILE=dist

USER root
RUN chgrp -R 0 /apps/dev && chmod -R g=u /apps/dev

COPY ${EXEC_FILE} /apps/dev/dist

COPY server/package.json /apps/dev
COPY server/package-lock.json /apps/dev
COPY .env.cloud /apps/dev/dist/.env

RUN npm config set registry npm/npm-release && \
    npm config set always-auth false && \
    npm install -g npx && \
    npm install

ENV PATH /apps/dev/node_modules/.bin:$PATH

EXPOSE 8080

USER 10001
ENTRYPOINT ["env-cmd", "-f","/apps/dev/dist/.env","node","/apps/dev/dist/index.js"]