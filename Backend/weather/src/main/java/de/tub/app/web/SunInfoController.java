package de.tub.app.web;

import ca.rmen.sunrisesunset.SunriseSunset;
import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.sun.DayInfo;
import com.google.gson.Gson;
import java.util.Calendar;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SunInfoController {

    @Autowired
    private ObjFactory objFactory;

    @RequestMapping(value = "/sunrise_sunset/{lon}/{lat}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity sunrise_sunset(
            @PathVariable(value = "lat", required = true) Double lat,
            @PathVariable(value = "lon", required = true) Double lon) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), lat, lon);

        System.out.println("Sunrise at: " + sunriseSunset[0].getTime());
        System.out.println("Sunset at: " + sunriseSunset[1].getTime());

        return new ResponseEntity(new Gson().toJson(new DayInfo(lat, lon, sunriseSunset[0].getTime(), sunriseSunset[1].getTime())), HttpStatus.OK);
    }

    @RequestMapping(value = "/sunrise_sunset/{lon}/{lat}/condition/{conditions}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity check_condition_sun(
            @PathVariable(name = "lat", required = true) Double lat,
            @PathVariable(name = "lon", required = true) Double lon,
            @PathVariable(name = "conditions", required = true) String conditions) {
        Calendar[] sunriseSunset = SunriseSunset.getSunriseSunset(Calendar.getInstance(), lat, lon);

        if (sunriseSunset == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        Date sunrise = sunriseSunset[0].getTime();
        Date sunset = sunriseSunset[1].getTime();

        Date now = Calendar.getInstance().getTime();

        boolean result = false;

        if (conditions.equals("isday")) {
            result = isDay(sunrise, sunset, now);
        } else {
            result = !isDay(sunrise, sunset, now);
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    private boolean isDay(Date sunrise, Date sunset, Date now) {
        if (now.before(sunset) && now.after(sunrise)) {
            return true;
        } else {
            return false;
        }
    }
}
