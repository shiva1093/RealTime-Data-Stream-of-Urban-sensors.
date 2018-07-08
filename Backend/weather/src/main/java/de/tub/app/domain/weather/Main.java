package de.tub.app.domain.weather;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Main {

    private Long temp;
    private Integer pressure;
    private Integer humidity;
    private Long temp_min;
    private Long temp_max;

    public Main() {
    }

    public Main(Long temp, Integer pressure, Integer humidity, Long temp_min, Long temp_max) {
        this.temp = temp;
        this.pressure = pressure;
        this.humidity = humidity;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
    }

    @Override
    public String toString() {
        return "Main{" + "temp=" + temp + ", pressure=" + pressure + ", humidity=" + humidity + ", temp_min=" + getTemp_min() + ", temp_max=" + getTemp_max() + '}';
    }

    /**
     * @return the temp
     */
    public Long getTemp() {
        return temp;
    }

    /**
     * @param temp the temp to set
     */
    public void setTemp(Long temp) {
        this.temp = temp;
    }

    /**
     * @return the pressure
     */
    public Integer getPressure() {
        return pressure;
    }

    /**
     * @param pressure the pressure to set
     */
    public void setPressure(Integer pressure) {
        this.pressure = pressure;
    }

    /**
     * @return the humidity
     */
    public Integer getHumidity() {
        return humidity;
    }

    /**
     * @param humidity the humidity to set
     */
    public void setHumidity(Integer humidity) {
        this.humidity = humidity;
    }

    /**
     * @return the temp_min
     */
    public Long getTemp_min() {
        return temp_min;
    }

    /**
     * @param temp_min the temp_min to set
     */
    public void setTemp_min(Long temp_min) {
        this.temp_min = temp_min;
    }

    /**
     * @return the temp_max
     */
    public Long getTemp_max() {
        return temp_max;
    }

    /**
     * @param temp_max the temp_max to set
     */
    public void setTemp_max(Long temp_max) {
        this.temp_max = temp_max;
    }

}
