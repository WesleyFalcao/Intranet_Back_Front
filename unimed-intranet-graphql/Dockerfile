FROM node:12-alpine AS BUILD_IMAGE

RUN apk update && apk add yarn curl bash python g++ make && rm -rf /var/cache/apk/*
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
COPY --chown=node:node . .
RUN yarn build
RUN npm prune --production
RUN /usr/local/bin/node-prune
 
FROM node:12-alpine 
 
WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/views ./views
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
 
EXPOSE 3000
 
CMD [ "node", "./dist/main.js" ]