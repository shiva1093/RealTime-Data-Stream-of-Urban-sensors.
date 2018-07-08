package de.tub.app.web;

import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.weather.WeatherDetails;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ObsoleteCodeController {

    @Autowired
    private ObjFactory objFactory;

    /**
     * conditions main.temp < 20 in berlin
     *
     * @param weatherDetails
     * @param conditions
     * @return
     * @throws IllegalArgumentException
     */
    public boolean checkCondition(WeatherDetails weatherDetails, String conditions) throws IllegalArgumentException, IllegalAccessException {
        if (weatherDetails == null) {
            throw new IllegalArgumentException("Weather information is null");
        }
        System.out.println(weatherDetails.toString());

        String all_json = new Gson().toJson(weatherDetails);
        Map<String, Object> conditionsMap = getConditions(null, all_json);

        System.out.println("");
        System.out.println("Values Map First way ==========================================================");

        for (String key : conditionsMap.keySet()) {
            System.out.println(key + "=" + conditionsMap.get(key));
        }

//        System.out.println("");
//        System.out.println("Values Map Second way ==========================================================");
//        Gson gson = new Gson();
//        Map<String, Object> map = new HashMap<String, Object>();
//        map = (Map<String, Object>) gson.fromJson(all_json, map.getClass());
//        for (String key : map.keySet()) {
//            System.out.println(key + "=" + conditionsMap.get(key));
//        }
        return true;
    }

    public void traverse(JsonNode node, Map<String, String> result) {
        Iterator<Map.Entry<String, JsonNode>> it = node.fields();
        while (it.hasNext()) {
            Map.Entry<String, JsonNode> entry = it.next();
            JsonNode n = entry.getValue();
            if (n.isObject()) { // if JSON object, traverse recursively
                traverse(n, result);
            } else { // if not, just add as String
                result.put(entry.getKey(), n.asText());
            }
        }
    }

    public Map<String, Object> getConditionsOld(String path, String jsonParentObject) {
        System.out.println(jsonParentObject);
        Map<String, Object> map = new HashMap();
        String json = jsonParentObject.substring(1, jsonParentObject.length() - 1);

        String parentProperties[] = json.split(",");
        System.out.println(parentProperties.length);

        for (String mainToken : parentProperties) {
            String tokens[] = mainToken.split(":");
            if (tokens != null && tokens.length >= 2) {
                if (tokens[1].startsWith("{")) {
                    if (path == null) {
                        map.putAll(getConditions(tokens[0], tokens[1]));
                    } else {
                        map.putAll(getConditions(path + tokens[0], tokens[1]));
                    }
                } else {
                    String keyToPut = trimExtraQuotes(tokens[0]);
                    String valueToPut = trimExtraQuotes(tokens[1]);

                    if (path == null) {
                        map.put(keyToPut, valueToPut);
                    } else {
                        map.put(path + "." + keyToPut, valueToPut);
                    }

                }
            }
        }

        return map;
    }

    private String trimExtraQuotes(String input) {
        String value = input;
        if (value.startsWith("\"") && value.endsWith("\"")) {
            value = value.substring(1, value.length() - 1);
        }

        return value;
    }

    //======================
    public Map<String, Object> getConditions(String path, String jsonParentObject) {
        System.out.println(jsonParentObject);
        Map<String, Object> map = new HashMap();
        String json = jsonParentObject.substring(1, jsonParentObject.length() - 1);

        String nextKey = json.substring(0, json.indexOf(":"));

        return map;
    }
}
