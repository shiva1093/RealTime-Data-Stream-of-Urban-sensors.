package de.tub.app.domain.weather;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Wind {

    private Double speed;
    private Double gust;
    private Long deg;

    public Wind() {
    }

    public Wind(Double speed, Double gust, Long deg) {
        this.speed = speed;
        this.gust = gust;
        this.deg = deg;
    }

    /**
     * @return the speed
     */
    public Double getSpeed() {
        return speed;
    }

    /**
     * @param speed the speed to set
     */
    public void setSpeed(Double speed) {
        this.speed = speed;
    }

    /**
     * @return the deg
     */
    public Long getDeg() {
        return deg;
    }

    /**
     * @param deg the deg to set
     */
    public void setDeg(Long deg) {
        this.deg = deg;
    }

    /**
     * @return the gust
     */
    public Double getGust() {
        return gust;
    }

    /**
     * @param gust the gust to set
     */
    public void setGust(Double gust) {
        this.gust = gust;
    }
}
