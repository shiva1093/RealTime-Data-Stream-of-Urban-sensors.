package de.tub.app.apputil;

import ca.rmen.sunrisesunset.SunriseSunset;
import de.tub.app.domain.sun.DayInfo;
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

    public boolean isDay(GeoLocation geoLocation) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(
                Calendar.getInstance(), geoLocation.getLat(), geoLocation.getLon());
        Date sunrise = sunriseSunset[0].getTime();
        Date sunset = sunriseSunset[1].getTime();

        return isDay(sunrise, sunset);
    }

    public boolean isDay(Double lon, Double lat) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), lat, lon);
        Date sunrise = sunriseSunset[0].getTime();
        Date sunset = sunriseSunset[1].getTime();

        return isDay(sunrise, sunset);
    }

    public boolean isDay(Date sunrise, Date sunset) {
        Date now = Calendar.getInstance().getTime();
        if (now.before(sunset) && now.after(sunrise)) {
            return true;
        } else {
            return false;
        }
    }

    public DayInfo getDayInfo(Double lon, Double lat) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), lat, lon);

        return new DayInfo(lon, lat, sunriseSunset[0].getTime(), sunriseSunset[1].getTime());
    }

    public DayInfo getDayInfo(GeoLocation location) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), location.getLat(), location.getLon());

        return new DayInfo(location.getLon(), location.getLat(), sunriseSunset[0].getTime(), sunriseSunset[1].getTime());
    }
}
