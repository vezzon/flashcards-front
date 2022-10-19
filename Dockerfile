FROM node:16 as builder

ENV NODE_ENV=production

WORKDIR /usr/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/client/build /usr/share/nginx/html