# Weather, Sunrise and Sunfall API

PreRquisits for this project:

1. JDK 1.8
2. RabbitMQ
3. Gradle

# Step 1
Start MongoDB

> sudo service mongod start

# Step 2: RabbitMQ

Start RabbitMQ using following command:

>  sudo service rabbitmq-server start

# Step 3: Run the project using command
> gradle :run

# Accessing the App:
> http://localhost:8080

Help page:
> http://localhost:8080/help




docker stop $(docker ps -a -q)
docker rm $(docker ps -aq --filter name=weather_api)
docker build . -t weather_api
docker run weather_api
docker run --name=weather_api -t -p 8080:8080 -d ubuntu

docker logs --tail container weather_api




docker container ls



## Login to docker instance
docker exec -it weather_api /bin/bash
cd /tmp/
find / -name "weather"
find /home/username/ -name "*.err"






