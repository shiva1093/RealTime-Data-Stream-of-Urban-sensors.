package de.tub.app.apputil;

import ca.rmen.sunrisesunset.SunriseSunset;
import de.tub.app.domain.sun.SunInfo;
import de.tub.app.domain.weather.GeoLocation;
import java.util.Calendar;
import java.util.Date;
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

    public boolean isDay(Date sunrise, Date sunset, Date now) {
        if (now.before(sunset) && now.after(sunrise)) {
            return true;
        } else {
            return false;
        }
    }

    public SunInfo getSunInfo(Double lon, Double lat) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), lat, lon);

        return new SunInfo(lon, lat, sunriseSunset[0].getTime(), sunriseSunset[1].getTime());
    }

    public SunInfo getSunInfo(GeoLocation location) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), location.getLat(), location.getLon());

        return new SunInfo(location.getLon(), location.getLat(), sunriseSunset[0].getTime(), sunriseSunset[1].getTime());
    }
}
