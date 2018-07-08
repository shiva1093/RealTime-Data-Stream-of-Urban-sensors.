package de.tub.app.web;

import de.tub.app.apputil.JsonUtil;
import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.weather.GeoLocation;
import de.tub.app.domain.weather.WeatherDetails;
import com.google.gson.Gson;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ConditionsController {

    @Autowired
    private ObjFactory objFactory;

    /**
     * **********************************************************************
     */
    //Test Code
    /**
     * **********************************************************************
     */
    @RequestMapping(value = "/check_condition/test", method = RequestMethod.GET, produces = {MediaType.TEXT_PLAIN_VALUE})
    public String check_condition_weather() {
        WeatherDetails weatherDetails = null;

        StringBuilder output = new StringBuilder();

        try {
            GeoLocation glIslamabad = new GeoLocation(73.0479, 33.6844);
            GeoLocation glBerlin = new GeoLocation(52.5200, 13.4050);

            weatherDetails = objFactory.getAppUtil().getWeather(glBerlin);
            //String all_json = new Gson().toJson(weatherDetails);
            String all_json = "{\"cod\":200,\"dt\":1530129600,\"id\":1176615,\"base\":\"stations\",\"name\":\"Islamabad\",\"visibility\":\"7000\",\"coord\":{},\"main\":{\"temp\":302,\"pressure\":1004,\"humidity\":58,\"temp_min\":302,\"temp_max\":302},\"sys\":{\"type\":1,\"id\":7146,\"message\":0,\"country\":\"PK\",\"sunrise\":1530057581,\"sunset\":1530109333}}";

            Map<String, Object> conditionsMap = JsonUtil.getInstance().getConditions(null, all_json);
            System.out.println("");
            System.out.println("Values Map First way ==========================================================");

            for (String key : conditionsMap.keySet()) {
                String data = key + "=" + conditionsMap.get(key);
                System.out.println(data);

                output.append(data).append("\n");
            }

            objFactory.getConditionUtil().checkCondition(conditionsMap, "main.temp < 20 in berlin");
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return output.toString();
    }

}
