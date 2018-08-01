package de.tub.app;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import de.tub.app.apputil.JsonUtil;
import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.Condition;
import de.tub.app.domain.RabbitMessage;
import de.tub.app.domain.sun.SunInfo;
import de.tub.app.domain.weather.GeoLocation;
import de.tub.app.domain.weather.WeatherDetails;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Calendar;
import java.util.Map;
import java.util.concurrent.TimeoutException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

/**
 *
 * @author naveed
 */
@Service
@PropertySource("classpath:application.properties")
public class CustomMessageListener {

    @Autowired
    private ObjFactory objFactory;
    @Autowired
    private Environment env;

    int count_received = 0;

    @RabbitListener
    public void receiveMessageAll(byte[] message) {
        System.out.println("Hello");
    }

    @RabbitListener(queues = Constants.QUEUE_GENERIC_NAME)
    public void receiveMessage(byte[] message) {
        System.out.println("CustomMessageListener > receiveMessage");
    }

    @RabbitListener(queues = "${rabbitmq.queue_name.weather}")
    public void receiveMessageForWeather(byte[] message) {
        count_received++;
        String msg = new String(message, Charset.forName("UTF-8"));

        try {
            RabbitMessage rabbitMessage = onMessageReceive(message);

            if (rabbitMessage.getCommand() == null) {
                System.out.println("CustomMessageListener > COMMAND is Null. Possible error from UI");
            } else if (rabbitMessage.getCommand().equals(RabbitMessage.CommandType.CREATE)) {
                System.out.println("CustomMessageListener > COMMAND = CREATE");
                rabbitMessage.setCommand(null);
                if (rabbitMessage.getCondition() != null && !rabbitMessage.getCondition().isEmpty()) {
                    Condition condition = rabbitMessage.getConditionAsCondition();
                    GeoLocation location = new GeoLocation(condition.getLon(), condition.getLat());

                    WeatherDetails weatherDetails = objFactory.getWeatherUtil().getWeather(location);

                    Map<String, Object> conditionsMap = JsonUtil.getInstance().getConditions(
                            null, new Gson().toJson(weatherDetails));

                    rabbitMessage.setStatus(objFactory.getConditionUtil().checkCondition(conditionsMap, condition.getValue()));
//                    rabbitMessage.setCondition(null);
                }

                rabbitMessage.setCategory("weather");
                this.save(rabbitMessage);

                this.pushBack(env.getRequiredProperty("rabbitmq.queue_name.weather"), msg);
            } else if (rabbitMessage.getCommand().equals(RabbitMessage.CommandType.DELETE)) {
                System.out.println("CustomMessageListener > COMMAND = DELETE");

                objFactory.getRabbitMessageRepository().delete(rabbitMessage);

                System.out.println("CustomMessageListener > Message saved deleted");
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            Logger.getLogger(CustomMessageListener.class.getName()).log(Level.SEVERE, null, ex);
        } finally {

        }
    }

    @RabbitListener(queues = "${rabbitmq.queue_name.day_info}")
    public void receiveMessageForDayInfo(byte[] message) {
        count_received++;
        String msg = new String(message, Charset.forName("UTF-8"));

        try {
            RabbitMessage rabbitMessage = onMessageReceive(message);

            if (rabbitMessage.getCommand() == null) {
                System.out.println("CustomMessageListener > COMMAND is Null. Possible error from UI");
            } else if (rabbitMessage.getCommand().equals(RabbitMessage.CommandType.CREATE)) {
                System.out.println("CustomMessageListener > COMMAND = CREATE");
                rabbitMessage.setCommand(null);
                if (rabbitMessage.getCondition() != null && !rabbitMessage.getCondition().isEmpty()) {
                    Condition condition = rabbitMessage.getConditionAsCondition();
                    GeoLocation location = new GeoLocation(condition.getLon(), condition.getLat());

                    SunInfo dayInfo = objFactory.getSunInfoUtil().getSunInfo(location);

                    rabbitMessage.setStatus(objFactory.getConditionUtil().checkCondition(dayInfo, condition.getValue()));
//                    rabbitMessage.setCondition(null);
                }

                rabbitMessage.setCategory("sun_info");
                this.save(rabbitMessage);

                this.pushBack(env.getRequiredProperty("rabbitmq.queue_name.day_info"), msg);
            } else if (rabbitMessage.getCommand().equals(RabbitMessage.CommandType.DELETE)) {
                System.out.println("CustomMessageListener > COMMAND = DELETE");

                objFactory.getRabbitMessageRepository().delete(rabbitMessage);

                System.out.println("CustomMessageListener > Message saved deleted");
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            Logger.getLogger(CustomMessageListener.class.getName()).log(Level.SEVERE, null, ex);
        } finally {

        }
    }

    public RabbitMessage onMessageReceive(byte[] msg) throws IOException {
        System.out.println("CustomMessageListener > Received Message Count: " + count_received);
        System.out.println("CustomMessageListener > Received message as generic byte:  " + msg);

        ObjectMapper mapper = new ObjectMapper();
        RabbitMessage rabbitMessage = mapper.readValue(msg, RabbitMessage.class);
        System.out.println("CustomMessageListener > Received Message " + rabbitMessage.toString());

        return rabbitMessage;

    }

    private void save(RabbitMessage rabbitMessage) throws JsonProcessingException {
//        ObjectMapper mapper = new ObjectMapper();
//        String jsonArray = mapper.writeValueAsString(rabbitMessage.getCondition());
//        rabbitMessage.setConditionStr(jsonArray);

        rabbitMessage.setDateCreated(Calendar.getInstance().getTime());
        objFactory.getRabbitMessageRepository().save(rabbitMessage);

        System.out.println("CustomMessageListener > Message saved in mongo");
    }

    private void pushBackOld(String queueName, String message) throws IOException, TimeoutException {
//        ConnectionFactory factory = new ConnectionFactory();
//        factory.setHost(Constants.RABBIT_HOST);
//        if (Constants.RABBIT_port != -1) {
//            factory.setPort(Constants.RABBIT_port);
//        }
//
//        Connection connection = factory.newConnection();
//        Channel channel = connection.createChannel();
//
//        channel.basicPublish("", queueName, null, message.getBytes());
//        System.out.println(" [x] Sent '" + message + "'");
    }

    private void pushBack(String queueName, String message) throws IOException, TimeoutException {
        objFactory.getRabbitUtil().configure(objFactory.getRabbitUtil().getConnection());
        objFactory.getRabbitTemplate().convertAndSend(Constants.EXCHANGE_NAME, queueName, message);
        System.out.println(" [x] Sent '" + message + "'");
    }
}
