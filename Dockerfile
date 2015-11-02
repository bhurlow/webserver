FROM node:latest
EXPOSE 3000
ADD . /app
WORKDIR /app
CMD node server.js 
