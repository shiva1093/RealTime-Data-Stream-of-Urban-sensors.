package de.tub.app.apputil;

import ca.rmen.sunrisesunset.SunriseSunset;
import de.tub.app.domain.sun.DayInfo;
import de.tub.app.domain.weather.GeoLocation;
import java.util.Calendar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Naveed Kamran
 */
@Component
public class SunInfoUtil {

    @Autowired
    private ObjFactory objFactory;

    public DayInfo getDayInfo(Double lon, Double lat) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), lat, lon);

        return new DayInfo(lon, lat, sunriseSunset[0].getTime(), sunriseSunset[1].getTime());
    }

    public DayInfo getDayInfo(GeoLocation location) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), location.getLat(), location.getLon());

        return new DayInfo(location.getLon(), location.getLat(), sunriseSunset[0].getTime(), sunriseSunset[1].getTime());
    }
}
