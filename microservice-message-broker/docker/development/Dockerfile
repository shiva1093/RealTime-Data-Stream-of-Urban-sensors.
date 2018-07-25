FROM ubuntu:latest

RUN groupadd -r rabbitmq && \
    useradd -r -d /var/lib/rabbitmq -m -g rabbitmq rabbitmq

# RabbitMQ installation
RUN apt-get update && \
    apt-get install wget --assume-yes && \
    apt-get install -my wget gnupg2 && \
    echo 'deb http://www.rabbitmq.com/debian/ testing main' | tee /etc/apt/sources.list.d/rabbitmq.list && \
    wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | apt-key add - && \
    apt-get update && \
    apt-get install rabbitmq-server --assume-yes

# Enable plugins
RUN rabbitmq-plugins enable rabbitmq_management
RUN rabbitmq-plugins enable rabbitmq_web_stomp
RUN rabbitmq-plugins enable rabbitmq_mqtt

# For healtcheck
RUN apt-get update && \
    apt-get install -y curl

# expose ports
# Management
EXPOSE  15672
# Web-STOMP plugin
EXPOSE  15674
# MQTT:
EXPOSE  1883
# AMQP
EXPOSE  5672

# configure RabbitMQ
COPY ["rabbitmq.config", "/etc/rabbitmq/rabbitmq.config"]
COPY ["definitions.json", "/etc/rabbitmq/definitions.json"]

RUN export RABBITMQ_NODENAME="dev@localhost" && \
    chmod -R 755 /var/lib/rabbitmq && \
    chown -R rabbitmq:rabbitmq /var/lib/rabbitmq && \
    chmod -R 755 /var/log/rabbitmq  && \
    chown -R rabbitmq:rabbitmq /var/log/rabbitmq && \
    chmod -R 755 /etc/rabbitmq && \
    chown -R rabbitmq:rabbitmq /etc/rabbitmq

RUN export RABBITMQ_LOG_BASE=/var/log/rabbitmq

#COPY docker-healthcheck.sh /usr/local/bin/
#COPY ./docker-healthcheck.sh /docker-healthcheck.sh

#HEALTHCHECK --interval=15s --timeout=3s CMD ./docker-healthcheck.sh

CMD /usr/sbin/rabbitmq-server