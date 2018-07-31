import React from 'react';
export const config = {
    "topics" : {
        "weather": "contextfencing.sensor.weather",
        "daylight": "contextfencing.sensor.daylight",
        "transport": "contextfencing.sensor.public-transport",
        "vehiclesharing": "contextfencing.sensor.car-sharing"
    },
    "URL": {
        "weather": "http://localhost:9000/condition/search/weather?pageSize=5&start=0",
        "daylight": "http://localhost:9000/condition/search/sun_info?pageSize=5&start=0",
        "transport": "http://localhost:18099/bvg?pageSize=10&pageNumber=1&sortCriteria=_id&sortType=asc",
       // "vehiclesharing": "http://localhost:9001/carConditons/pageSize=10&pageNumber=0&sortCriteria=provider&sortType=DESC"
    }
};