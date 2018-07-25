# Dockerizing MongoDB: Dockerfile for building MongoDB images
# Based on ubuntu:16.04, installs MongoDB following the instructions from:
# http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

FROM ubuntu:16.04

# Installation:
# Import MongoDB public GPG key AND create a MongoDB list file
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu $(cat /etc/lsb-release | grep DISTRIB_CODENAME | cut -d= -f2)/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list

# Update apt-get sources AND install MongoDB
RUN apt-get update && apt-get install -y mongodb-org

# Install nano
RUN apt-get install nano

# Create the MongoDB data directory
RUN mkdir -p /data/db

# Create the MongoDB data directory
RUN mkdir -p /data/log

COPY createUsers.js /
#COPY ["docker-entrypoint.sh", "/docker-entrypoint.sh"]

COPY ["mongod.conf", "/etc/mongod.conf"]
#COPY mongod.conf /etc/mongod.conf

RUN echo "Start Mongo DB (for configuration only)" && \
    mongod --fork --logpath /data/log/mongodb.log && \
    echo "Execute Mongo DB Configuration Script" && \
    mongo /createUsers.js && \
    echo "Stop Mongo DB" && \
    mongod --shutdown

# Uncomment only for debugging
EXPOSE 27045

# Set /usr/bin/mongod as the dockerized entry-point application
#ENTRYPOINT ["/usr/bin/mongod"]
ENTRYPOINT ["/usr/bin/mongod", "--config", "/etc/mongod.conf"]
#ENTRYPOINT ["/docker-entrypoint.sh"]
