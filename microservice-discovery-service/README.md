####System Setup
#####Requirements
* Ubuntu (latest)
* Docker + Docker-Compose
* GIT
* Maven
* Port 80 on host should be available (for web interface)
* Port 8080 on host should be available (for API)

#####Installation (via Docker-Compose)
1. Pull the following projects from GIT Lab and place all project folders into a common folder
    * `git@git.snet.tu-berlin.de:contextfencing/engine-microservice.git`
    * `git@git.snet.tu-berlin.de:contextfencing/microservice_message-broker.git`
    * `git@git.snet.tu-berlin.de:contextfencing/microservice-api.git`
    * `git@git.snet.tu-berlin.de:contextfencing/microservice-geofencing.git`
    * `git@git.snet.tu-berlin.de:contextfencing/frontend-microservice.git`
    * `git@git.snet.tu-berlin.de:contextfencing/geofencing-service.git`
    * `git@git.snet.tu-berlin.de:contextfencing/microservice-discovery.git`
    * `git@git.snet.tu-berlin.de:contextfencing/microservice-database.git` 
2. Adjust the docker-related settings in projects
    *  `nano /geofencing-service/scr/main/resources/application.yml` (set to active profile "docker" on top of document)
    *  `nano /microservice-api/scr/main/resources/application.yml` (set to active profile "docker" on top of document)
    *  `nano /frontend-microservice/production/js/settings.js` (set web server IP of backendHost on top of document)
    *  `nano /engine-microservice/src/main/resources/application.conf` (set message broker host at bottom of document)
3. Build projects (TODO: not complete):
    *  `cd /microservice-discovery`
        - Unix: `./gradlew bootRepackage`
        - Windows: `gradlew bootRepackage` 
    *  `cd ../geofencing-service`
        - Unix: `./gradlew bootRepackage`
        - Windows: `gradlew bootRepackage` 
    *  `cd ../microservice-api`   
    *  `mvn -Dmaven.test.skip=true package` (builds the executable JAR file)
4.  `cd ../microservice-discovery`
5.  `docker-compose up --build` (builds all docker containers and orchestrates their activation in correct order)
6.  Access web interface via `http://localhost/login.html`  

####Module (Single component setup)
#####Setup (Command-line)
- Pull project from GIT Lab
- Open folder in command-line
- Run "./gradlew" (It will install gradle automatically)
- To build the executable Jar file run "./gradlew bootRepackage"

#####Setup (IntelliJ)
- Pull project from GIT Lab
- Open IntellJ Idea
- "Import Project" or "Project/Project from existing sources"
- Select the "build.gradle" file in the project folder
- Dialog "Import Project from Gradle" check "Use default gradle wrapper (recommended)"
- Run/Edit Configuration
- Left: Add new configuration
- Left: Select Spring Boot
- Right: Select main class
- Right: Select module
