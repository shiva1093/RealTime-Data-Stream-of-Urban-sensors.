package de.tub.app.domain.sun;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Date;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class SunInfo {

    private Double longitude;
    private Double latitude;
    private Date sunrise;
    private Date sunset;
    private String info;

    public SunInfo() {
    }

    public SunInfo(Double longitude, Double latitude, Date sunrise, Date sunset) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }

    @Override
    public String toString() {
        return "DayInfo{" + "longitude=" + getLongitude() + ", latitude=" + getLatitude() + ", sunrise=" + getSunrise() + ", sunset=" + getSunset() + '}';
    }

    /**
     * @return the longitude
     */
    public Double getLongitude() {
        return longitude;
    }

    /**
     * @param longitude the longitude to set
     */
    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    /**
     * @return the latitude
     */
    public Double getLatitude() {
        return latitude;
    }

    /**
     * @param latitude the latitude to set
     */
    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    /**
     * @return the sunrise
     */
    public Date getSunrise() {
        return sunrise;
    }

    /**
     * @param sunrise the sunrise to set
     */
    public void setSunrise(Date sunrise) {
        this.sunrise = sunrise;
    }

    /**
     * @return the sunset
     */
    public Date getSunset() {
        return sunset;
    }

    /**
     * @param sunset the sunset to set
     */
    public void setSunset(Date sunset) {
        this.sunset = sunset;
    }

    /**
     * @return the info
     */
    public String getInfo() {
        return info;
    }

    /**
     * @param info the info to set
     */
    public void setInfo(String info) {
        this.info = info;
    }

}
