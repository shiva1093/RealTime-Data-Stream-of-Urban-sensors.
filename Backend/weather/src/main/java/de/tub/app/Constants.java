package de.tub.app;

public class Constants {

    public static final String TOPIC_EXCHANGE_NAME = "spring-boot-exchange";

    public static final String QUEUE_NAME = "spring-boot";

    public static final String EXCHANGE_NAME = "amq.topic";
    public static final String QUEUE_GENERIC_NAME = "appGenericQueue";
    public static final String QUEUE_SPECIFIC_NAME = "appSpecificQueue";
    public static final String ROUTING_KEY = "amq.topic";

    public static final String RABBIT_HOST = "localhost";
    public static final int RABBIT_port = -1; //-1 incase of default port

}
