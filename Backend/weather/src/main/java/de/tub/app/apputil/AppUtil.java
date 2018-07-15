package de.tub.app.apputil;

import ca.rmen.sunrisesunset.SunriseSunset;
import de.tub.app.Config;
import de.tub.app.domain.sun.DayInfo;
import de.tub.app.domain.weather.GeoLocation;
import de.tub.app.domain.weather.WeatherDetails;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author Naveed Kamran
 */
@Component
public class AppUtil {

    @Autowired
    private ObjFactory objFactory;

}
