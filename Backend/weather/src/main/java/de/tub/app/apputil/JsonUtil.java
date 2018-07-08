package de.tub.app.apputil;

import java.util.HashMap;
import java.util.Map;

public class JsonUtil {

    private static JsonUtil instance = null;

    public static JsonUtil getInstance() {
        if (instance == null) {
            instance = new JsonUtil();
        }

        return instance;
    }

    public Map<String, Object> getConditions(String path, String jsonParentObject) {
        if (jsonParentObject == null || jsonParentObject.isEmpty() || jsonParentObject.trim().equals("{}")) {
            return new HashMap();
        }
        System.out.println("Parsing " + jsonParentObject);

        System.out.println(jsonParentObject);
        Map<String, Object> map = new HashMap();
        String json = jsonParentObject.substring(1, jsonParentObject.length() - 1);

        //Pointer must always point to starting quote in case of key or first characeter after : in case of value.
        //Example "cod":200,"dt":1530129600
        for (int currentPointer = 0; currentPointer <= json.length(); currentPointer++) {
            String nextKey = json.substring(currentPointer, json.indexOf(":", currentPointer));
            String nextValue = null;
            if (json.indexOf(",", currentPointer) >= 0) {
                nextValue = json.substring(json.indexOf(":", currentPointer) + 1, json.indexOf(",", currentPointer));
            } else {
                nextValue = json.substring(json.indexOf(":", currentPointer) + 1, json.length());

                if (path != null) {
                    nextKey = path + "." + nextKey;
                }

                map.put(nextKey.replaceAll("\"", ""), nextValue.replaceAll("\"", ""));
                System.out.println("Parsed: " + nextKey + "=" + nextValue);
                currentPointer = json.length();
                break;
            }

            if (nextValue.startsWith("{")) {
                map.putAll(getConditions(nextKey, json.substring(json.indexOf("{", currentPointer), json.indexOf("}", currentPointer) + 1)));
                currentPointer = json.indexOf("}", currentPointer) + 2;
            } else {
                if (path != null) {
                    nextKey = path + "." + nextKey;
                }

                map.put(nextKey.replaceAll("\"", ""), nextValue.replaceAll("\"", ""));
                System.out.println("Parsed: " + nextKey + "=" + nextValue);
                currentPointer = json.indexOf(",", currentPointer);
            }
        }

        return map;
    }
}
