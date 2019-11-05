FROM node:latest
EXPOSE 3000
ADD . /app
WORKDIR /app

HEALTHCHECK --interval=1s --timeout=3s \
  CMD curl -f http://localhost:3000 || exit 1

CMD node server.js 
