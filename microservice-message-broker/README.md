## Development
#### RabbitMQ
- Management Console: [http://localhost:15672](http://localhost:15672)
- MQTT: [http://localhost:1883](http://localhost:1883)
- WebSTOMP: [http://localhost:15674](http://localhost:15674)
- AMQP: [http://localhost:5672](http://localhost:5672) 
- VirtualHost: contextfencing

##### Users
- User: contextfencing:admin (for MQTT)
- User: admin (for AMQP)
- Password: 34op/X07b_+4
- Permissions: Config, Read, Write 

--

- User: contextfencing:engine (for MQTT)
- User: engine (for AMQP)
- Password: cz%24_9=e#+_d
- Rights: Admin

--
 
- User: contextfencing:service (for MQTT)
- User: service (for AMQP)
- Password: 86df_+dfau!!)_L
- Rights: Read

--

- User: adapter (for AMQP)
- Password: jfuz2#37-3.fd
- Rights: Admin

### Import project in IntelliJ
1. File | New | Project from existing sources...
2. Select the build.gradle file

### Use Docker in IntelliJ
1. Edit | Run Configuration
2. Add new Docker Deployment Configuration
3. Give it the name "Development"
4. On register card "Deployment" do ...
    - ...select Dockerfile
    - ...set name of image, e.g. message-broker
    - ...set name of container, e.g. message-broker
5. On register card "Container" do ...
    - Add port binding: 1883, tcp, 0.0.0.0, 1883
    - Add port binding: 15672, tcp, 0.0.0.0, 15672
    - Add port binding: 15674, tcp, 0.0.0.0, 15674
    - Add port binding: 5672, tcp, 0.0.0.0, 5672
6. View | Tool Windows | Docker
7. Right-click on Docker and Connect 
8. Run the "Development" run configuration created above 

### Windows 10
Add rule to Windows-Firewall
- Inbound, allow, local port: 1883, tcp, remote port: all

## Deployment

