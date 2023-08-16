FROM node:18.17-alpine3.18

WORKDIR /tmp/ng-coffeezone

COPY package.json .
COPY yarn.lock .

RUN yarn install && \
    yarn cache clean

WORKDIR /usr/src/ng-coffeezone

COPY . .

EXPOSE 4200

ENTRYPOINT [ "./entrypoint.sh" ]
