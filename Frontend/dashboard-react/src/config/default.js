export const config = {
    "topics" : {
        "weather": "contextfencing.sensor.weather",
        "daylight": "contextfencing.sensor.daylight"
    },
    "URL": {
        "weather": "http://localhost:9000/condition/search/weather?pageSize=5&start=0",
        "daylight": "http://localhost:9000/condition/search/sun_info?pageSize=5&start=0"
    }
};