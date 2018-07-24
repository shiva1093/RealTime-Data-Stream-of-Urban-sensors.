package de.tub.app.task;

import de.tub.app.Config;
import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.weather.WeatherDetails;
import com.datenc.commons.date.DateUtil;
import com.google.gson.Gson;
import de.tub.app.Constants;
import de.tub.app.domain.Condition;
import de.tub.app.domain.RabbitMessage;
import de.tub.app.domain.sun.SunInfo;
import de.tub.app.domain.weather.GeoLocation;
import java.util.Calendar;
import java.util.List;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 *
 * @author Naveed Kamran
 */
@Component
public class ConditionCheckJob implements Runnable, ApplicationContextAware {

    ApplicationContext applicationContext = null;
    @Autowired
    private ObjFactory objFactory;

    @Scheduled(cron = Config.CRONE_WEATHER_RELOAD)
    @Override
    public void run() {
        System.out.println(DateUtil.getInstance().getDateTimeAsString(Calendar.getInstance().getTime()) + " UpdateWeatherJob executing .....");
        try {
            List<RabbitMessage> subs = objFactory.getRabbitMessageRepository().findAll();
            for (RabbitMessage rabbitMessage : subs) {
                log(rabbitMessage, "Weather conditon is changed. Updating the client for the updated weather using RabbitMQ.");
                Condition condition = rabbitMessage.getConditionAsCondition();

                if (rabbitMessage.getCategory().equals(Constants.CATEGORY_WEATHER)) {
                    WeatherDetails weatherDetails = objFactory.getWeatherUtil().getWeather(
                            new GeoLocation(condition.getLon(), condition.getLat()));
                    boolean conditionNewVal = objFactory.getConditionUtil().checkCondition(weatherDetails, rabbitMessage.getCondition().get(0).toString());
                    if (conditionNewVal != rabbitMessage.getStatus()) {
                        log(rabbitMessage, "Weather conditon is changed. Updating the client for the updated weather using RabbitMQ.");
                        rabbitMessage.setStatus(conditionNewVal);
                        objFactory.getRabbitTemplate().convertAndSend(Constants.EXCHANGE_NAME, Config.ROUNTING_KEY_BEGIN, new Gson().toJson(rabbitMessage));
                    } else {
                        log(rabbitMessage, "Weather conditon did not change. Continuing without doing any further action.");
                    }
                } else if (rabbitMessage.getCategory().equals(Constants.CATEGORY_SUN_INFO)) {
                    SunInfo sunInfo = objFactory.getSunInfoUtil().getSunInfo(
                            new GeoLocation(condition.getLon(), condition.getLat()));

                    boolean conditionNewVal = objFactory.getConditionUtil().checkCondition(sunInfo, rabbitMessage.getCondition().get(0).toString());
                    if (conditionNewVal != rabbitMessage.getStatus()) {
                        log(rabbitMessage, "Weather conditon is changed. Updating the client for the updated weather using RabbitMQ.");
                        objFactory.getRabbitTemplate().convertAndSend(Constants.EXCHANGE_NAME, Config.ROUNTING_KEY_BEGIN, new Gson().toJson(sunInfo));
                    } else {
                        log(rabbitMessage, "Weather conditon did not change. Continuing without doing any further action.");
                    }
                }
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        System.out.println("UpdateWeatherJob execution completed");
    }

    private void log(RabbitMessage rabbitMessage, String log) {
        System.out.println("ConditionCheckJob " + rabbitMessage.getBindingID() + " " + log);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext)
            throws BeansException {
        this.applicationContext = applicationContext;
    }

}
