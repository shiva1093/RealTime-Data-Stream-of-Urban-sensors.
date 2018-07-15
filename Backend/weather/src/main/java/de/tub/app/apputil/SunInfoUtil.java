package de.tub.app.apputil;

import ca.rmen.sunrisesunset.SunriseSunset;
import de.tub.app.domain.sun.SunRiseSet;
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

    public SunRiseSet getSunriseSunset(Double lon, Double lat) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), lat, lon);

        return new SunRiseSet(lon, lat, sunriseSunset[0].getTime(), sunriseSunset[1].getTime());
    }
}
