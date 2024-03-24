FROM node:latest
# WORKDIR /the/workdir/path
COPY . .
RUN npm install 
# RUN npm i express
EXPOSE 5200
CMD [ "node","index.js" ]
