FROM node:slim

ENV PORT 3000

USER node

WORKDIR /usr/home
 
COPY app.js .
 
EXPOSE "$PORT"

CMD ["node", "app.js"]