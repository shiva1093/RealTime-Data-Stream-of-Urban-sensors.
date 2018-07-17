package de.tub.app;

public class Constants {

    public static final String TOPIC_EXCHANGE_NAME = "spring-boot-exchange";

//    public static final String QUEUE_NAME = "spring-boot";
    public static final String EXCHANGE_NAME = "amq.topic";
    public static final String QUEUE_GENERIC_NAME = "appGenericQueue";
//    public static final String QUEUE_SPECIFIC_NAME = "appSpecificQueue";
    public static final String ROUTING_KEY = "amq.topic";
    public static final String QUEUE_NAME_WEATHER = "contextfencing.sensor.weather";
    public static final String QUEUE_NAME_DAY_INFO = "contextfencing.sensor.daylight";

    public static final String CATEGORY_WEATHER = "weather";
    public static final String CATEGORY_SUN_INFO = "day_info";
}
