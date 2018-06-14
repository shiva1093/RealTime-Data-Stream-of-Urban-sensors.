var mqtt = require('mqtt');
var url = require('url');
// Parse
var url = "mqtt://localhost:1883";

//username: auth[0] + ":" + auth[0] if you are on a shared instance
var options = {
  port: 1883,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: "contextfencing:engine",
  password: "cz%24_9=e#+_d",
};

// Create a client connection
var client = mqtt.connect(url, options);

client.on('connect', function() { // When connected
  console.log("connected successfully!");
  // subscribe to a topic
  client.subscribe('hello/world', function() {
    // when a message arrives, do something with it
    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    })
  });

  // publish a message to a topic
  client.publish('hello/world', 'a new message!!!!', function() {
    console.log("Message is published");
    client.end(); // Close the connection when published
  });
});

