FROM node:18

RUN mkdir -p /home/miApp

COPY . /home/miApp

EXPOSE 4000

CMD ["node", "/home/miApp/server/index.js"]