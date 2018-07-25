#!/usr/bin/env bash
#echo "Start Mongo DB"
#mongod --fork --logpath /data/log/mongodb.log
#echo "Execute Mongo DB Script"
#mongo /createUsers.js
#echo "Stop Mongo DB"
#mongod --shutdown
echo "Start Mongo DB (with authentication enabled)"
/usr/bin/mongod --config /etc/mongod.conf