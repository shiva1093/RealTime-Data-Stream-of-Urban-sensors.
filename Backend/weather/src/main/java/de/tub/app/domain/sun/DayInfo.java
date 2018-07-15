package de.tub.app.domain.sun;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Date;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class DayInfo {

    private Double longitude;
    private Double latitude;
    private Date sunrise;
    private Date sunset;

    public DayInfo() {
    }

    public DayInfo(Double longitude, Double latitude, Date sunrise, Date sunset) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }

    @Override
    public String toString() {
        return "DayInfo{" + "longitude=" + longitude + ", latitude=" + latitude + ", sunrise=" + sunrise + ", sunset=" + sunset + '}';
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
     * @return the longitude
     */
    public Double getDoubleitude() {
        return longitude;
    }

    /**
     * @param longitude the longitude to set
     */
    public void setDoubleitude(Double longitude) {
        this.longitude = longitude;
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

}
