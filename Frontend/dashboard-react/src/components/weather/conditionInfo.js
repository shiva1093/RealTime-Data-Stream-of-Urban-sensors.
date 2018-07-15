export const conditions = {
        "catagory" : ["Temperature", "Wind.speed", "Humidity", "Pressure", "Sunny", "Rainy", "Snow", "Cloudy"],
        "catavalue" : {
            "Temperature": [5, 10, 15, 20, 25, 30, 35],
            "Wind.speed": ["5m/s", "10m/s", "15m/s", "20m/s", "30m/s", "40m/s"],
            "Humidity": ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"],
            "Pressure":["1000", "1500", "2000", "3000"],
            "Sunny": ["weather.main == Clear"],
            "Rainy": ["weather.main == Rain"],
            "Snow" : ["weather.main == Snow"],
            "Cloudy" : ["weather.main == Clouds"] 
        },
        "isCondition" : ["Sunny", "Rainy", "Snow", "Cloudy"],
        "condition" : [">=", "==", "=<"]   
    };


 
