FROM frolvlad/alpine-oraclejdk8:slim

MAINTAINER Sandro Rodriguez Garzon (sandro.rodriguezgarzon@tu-berlin.de)

VOLUME /tmp

#For healthcheck
RUN apk update && \
    apk add bash && \
    apk add --update curl && \
    rm -rf /car/cach/apk/*

ADD ./build/libs/microservice-discovery.jar microservice-discovery.jar
EXPOSE 8761
#RUN sh -c 'touch /dis.jar'
ENV JAVA_OPTS=""
#-Djava.security.egd=file:/dev/./urandom
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar /microservice-discovery.jar" ]