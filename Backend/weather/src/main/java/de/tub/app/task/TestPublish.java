package de.tub.app.task;

import de.tub.app.apputil.ObjFactory;
import com.datenc.commons.date.DateUtil;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import de.tub.app.Constants;
import java.io.IOException;
import java.util.Calendar;
import java.util.concurrent.TimeoutException;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 *
 * @author Naveed Kamran
 */
@Component
@PropertySource("classpath:application.properties")
public class TestPublish implements Runnable, ApplicationContextAware {

    @Autowired
    private Environment env;
    ApplicationContext applicationContext = null;
    @Autowired
    private ObjFactory objFactory;

//    @Scheduled(cron = "0 0/1 * * * ?")
    @Override
    public void run() {
        System.out.println(DateUtil.getInstance().getDateTimeAsString(Calendar.getInstance().getTime()) + " TestPublish executing .....");
        try {
            testDayInfo();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        try {
            testPushWeather();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        System.out.println("UpdateWeatherJob execution completed");
    }

    private void testDayInfo() throws IOException, TimeoutException {
        Connection connection = objFactory.getRabbitUtil().getConnection();
        Channel channel = connection.createChannel();

        String message = "{\n"
                + "\"bindingID\":\"ce081440-82a9-11e8-9b5b-3bfd459ee839\",\n"
                + "\"Settings\":\"\",\n"
                + "\"condition\":[{\"lon\":139,\"lat\":35,\"value\":\"isday\"}],\n"
                + "\"command\":\"CREATE\",\n"
                + "\"status\":\"\"\n"
                + "}";

        channel.basicPublish("", env.getRequiredProperty("rabbitmq.queue_name.day_info"), null, message.getBytes());
//        objFactory.getRabbitTemplate().convertAndSend(Constants.EXCHANGE_NAME, Constants.QUEUE_NAME_DAY_INFO, message);
        System.out.println(" [x] Test Message Sent for DayInfo");
    }

    private void testPushWeather() throws IOException, TimeoutException {
        Connection connection = objFactory.getRabbitUtil().getConnection();
        Channel channel = connection.createChannel();

        String message = "{\n"
                + "\"bindingID\":\"ce081440-82a9-11e8-9b5b-3bfd459ee955\",\n"
                + "\"Settings\":\"\",\n"
                + "\"condition\":[{\"lon\":139,\"lat\":35,\"value\":\"main.temp < 20\"}],\n"
                + "\"command\":\"CREATE\",\n"
                + "\"status\":\"\"\n"
                + "}";

        channel.basicPublish("", env.getRequiredProperty("rabbitmq.queue_name.weather"), null, message.getBytes());
//        objFactory.getRabbitTemplate().convertAndSend(Constants.EXCHANGE_NAME, Constants.QUEUE_NAME_WEATHER, message);
        System.out.println(" [x] Test Message Sent for Weather");
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext)
            throws BeansException {
        this.applicationContext = applicationContext;
    }

}
