#FROM node:latest
FROM bhurlow/lein-node
EXPOSE 3000
ADD . /app
WORKDIR /app
CMD node server.js 
