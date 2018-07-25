FROM node:latest

RUN \
    mkdir -p /var/www/admindash/src && \
    mkdir -p /var/www/admindash/public

WORKDIR /var/www/admindash

# install packets
ADD package.json /var/www/admindash/
RUN npm install -s --save

# add source file into docker
ADD public/ /var/www/admindash/public/
ADD src/ /var/www/admindash/src/
ADD .babelrc /var/www/admindash/
ADD .env /var/www/admindash/

EXPOSE 3000

# start app
CMD ["npm", "start"]