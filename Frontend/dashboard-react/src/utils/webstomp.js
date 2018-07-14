'use strict'

var Stomp = require('stompjs');

var ws = new WebSocket('ws://' + window.location.hostname + ':15674/ws');
var client = Stomp.over(ws);

var on_error =  function() {
    console.log('error');
};


var on_connect = function(msg) {
    console.log("connect successfully!!!!")
}

var sendmsg = function (msg,topic) {
    // send the text to the destination
    client.send(topic, {"content-type":"text/plain"}, JSON.stringify(msg));

    //client.disconnect();
}

var receivemsg = function(){
    // upon connection, subscribe to the destination
    var sub = client.subscribe('/queue/weather', function(message) {
        // when a message is received, post it to the current WebWorker
        //postMessage("message: " + message.body);
    });
}

function connect() {
    client.connect('admin','34op/X07b_+4',on_connect, on_error,'contextfencing')
}

export {connect, sendmsg, receivemsg}

