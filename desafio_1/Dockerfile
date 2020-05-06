FROM node:14.1-alpine

RUN apk add --no-cache git

RUN cd ~ && mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

RUN git clone https://github.com/RaulRory/Full-Cycle-2.0.git

USER node
COPY --chown=node:node . .

RUN npm install

EXPOSE 3000
 resolvconf --enable-updates && resolvconf -u
CMD ["npm", "start"]
