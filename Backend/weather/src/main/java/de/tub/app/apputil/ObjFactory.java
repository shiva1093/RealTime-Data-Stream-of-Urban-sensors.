package de.tub.app.apputil;

import de.tub.app.message.Receiver;
import de.tub.app.repository.DayInfoRepository;
import de.tub.app.repository.RabbitMessageRepository;
import de.tub.app.repository.WeatherRepository;
import de.tub.app.repository.WeatherSubsRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Naveed Kamran
 */
@Component
public class ObjFactory {

    @Autowired
    private RabbitTemplate rabbitTemplate;
    ////////////////////////////////////////////////////////////////////////////
    @Autowired
    private AppUtil appUtil;
    @Autowired
    private ConditionUtil conditionUtil;
    @Autowired
    private DayInfoRepository dayInfoRepository;
    @Autowired
    private RabbitMessageRepository rabbitMessageRepository;
    @Autowired
    private WeatherRepository weatherRepository;
    @Autowired
    private WeatherSubsRepository weatherSubsRepository;
    @Autowired
    private Receiver receiver;

    /**
     * @return the appUtil
     */
    public AppUtil getAppUtil() {
        return appUtil;
    }

    /**
     * @param appUtil the appUtil to set
     */
    public void setAppUtil(AppUtil appUtil) {
        this.appUtil = appUtil;
    }

    /**
     * @return the weatherRepository
     */
    public WeatherRepository getWeatherRepository() {
        return weatherRepository;
    }

    /**
     * @param weatherRepository the weatherRepository to set
     */
    public void setWeatherRepository(WeatherRepository weatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    /**
     * @return the weatherSubsRepository
     */
    public WeatherSubsRepository getWeatherSubsRepository() {
        return weatherSubsRepository;
    }

    /**
     * @param weatherSubsRepository the weatherSubsRepository to set
     */
    public void setWeatherSubsRepository(WeatherSubsRepository weatherSubsRepository) {
        this.weatherSubsRepository = weatherSubsRepository;
    }

    /**
     * @return the rabbitTemplate
     */
    public RabbitTemplate getRabbitTemplate() {
        return rabbitTemplate;
    }

    /**
     * @param rabbitTemplate the rabbitTemplate to set
     */
    public void setRabbitTemplate(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    /**
     * @return the dayInfoRepository
     */
    public DayInfoRepository getDayInfoRepository() {
        return dayInfoRepository;
    }

    /**
     * @param dayInfoRepository the dayInfoRepository to set
     */
    public void setDayInfoRepository(DayInfoRepository dayInfoRepository) {
        this.dayInfoRepository = dayInfoRepository;
    }

    /**
     * @return the receiver
     */
    public Receiver getReceiver() {
        return receiver;
    }

    /**
     * @param receiver the receiver to set
     */
    public void setReceiver(Receiver receiver) {
        this.receiver = receiver;
    }

    /**
     * @return the conditionUtil
     */
    public ConditionUtil getConditionUtil() {
        return conditionUtil;
    }

    /**
     * @param conditionUtil the conditionUtil to set
     */
    public void setConditionUtil(ConditionUtil conditionUtil) {
        this.conditionUtil = conditionUtil;
    }

    /**
     * @return the rabbitMessageRepository
     */
    public RabbitMessageRepository getRabbitMessageRepository() {
        return rabbitMessageRepository;
    }

    /**
     * @param rabbitMessageRepository the rabbitMessageRepository to set
     */
    public void setRabbitMessageRepository(RabbitMessageRepository rabbitMessageRepository) {
        this.rabbitMessageRepository = rabbitMessageRepository;
    }

}
