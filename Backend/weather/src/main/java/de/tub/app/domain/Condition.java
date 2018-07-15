package de.tub.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Condition {

    enum ConditionType {
        WEATHER, DAY_INFO
    }

    private Double lon;
    private Double lat;
    private String value;
    private ConditionType conditionType;

    public Condition() {
    }

    public ConditionType getConditionType() {
        if (value.startsWith("is_day") || value.startsWith("is_night")) {
            return ConditionType.DAY_INFO;
        }
        return ConditionType.WEATHER;
    }

    @Override
    public String toString() {
        return "Condition{" + "lon=" + lon + ", lat=" + lat + ", value=" + value + ", conditionType=" + conditionType + '}';
    }

    /**
     * @return the lon
     */
    public Double getLon() {
        return lon;
    }

    /**
     * @param lon the lon to set
     */
    public void setLon(Double lon) {
        this.lon = lon;
    }

    /**
     * @return the lat
     */
    public Double getLat() {
        return lat;
    }

    /**
     * @param lat the lat to set
     */
    public void setLat(Double lat) {
        this.lat = lat;
    }

    /**
     * @return the value
     */
    public String getValue() {
        return value;
    }

    /**
     * @param value the value to set
     */
    public void setValue(String value) {
        this.value = value;
    }

}
