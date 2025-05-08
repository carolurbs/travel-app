FROM node:20.11.0-alpine
WORKDIR /app
RUN npm install -g json-server@0.17.4
COPY ./dbProduction.json .
EXPOSE 4000
ENTRYPOINT json-server --watch dbProduction.json --host 0.0.0.0 --port 4000