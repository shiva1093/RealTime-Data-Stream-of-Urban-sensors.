package de.tub.app.domain.weather;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Date;
import java.util.List;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class WeatherDetails {

    private Long cod;
    private Long dt;
    private Long id;
    private String base;
    private String name;
    private String visibility;
    private GeoLocation coord;
    private List weather;
    private Main main;
    private Sys sys;
    private Wind wind;
    private Cloud clouds;
    private Date dateCreated;

    public WeatherDetails() {
    }

    @Override
    public String toString() {
        return "WeatherDetails{" + "cod=" + cod + ", dt=" + dt + ", id=" + id + ", base=" + base + ", name=" + name + ", visibility=" + visibility + ", coord=" + coord + ", weather=" + weather + ", main=" + main + ", sys=" + sys + ", wind=" + wind + ", clouds=" + clouds + ", dateCreated=" + dateCreated + '}';
    }

    /**
     * @return the cod
     */
    public Long getCod() {
        return cod;
    }

    /**
     * @param cod the cod to set
     */
    public void setCod(Long cod) {
        this.cod = cod;
    }

    /**
     * @return the dt
     */
    public Long getDt() {
        return dt;
    }

    /**
     * @param dt the dt to set
     */
    public void setDt(Long dt) {
        this.dt = dt;
    }

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the base
     */
    public String getBase() {
        return base;
    }

    /**
     * @param base the base to set
     */
    public void setBase(String base) {
        this.base = base;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the visibility
     */
    public String getVisibility() {
        return visibility;
    }

    /**
     * @param visibility the visibility to set
     */
    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    /**
     * @return the coord
     */
    public GeoLocation getCoord() {
        return coord;
    }

    /**
     * @param coord the coord to set
     */
    public void setCoord(GeoLocation coord) {
        this.coord = coord;
    }

    /**
     * @return the weather
     */
    public List getWeather() {
        return weather;
    }

    /**
     * @param weather the weather to set
     */
    public void setWeather(List weather) {
        this.weather = weather;
    }

    /**
     * @return the main
     */
    public Main getMain() {
        return main;
    }

    /**
     * @param main the main to set
     */
    public void setMain(Main main) {
        this.main = main;
    }

    /**
     * @return the sys
     */
    public Sys getSys() {
        return sys;
    }

    /**
     * @param sys the sys to set
     */
    public void setSys(Sys sys) {
        this.sys = sys;
    }

    /**
     * @return the wind
     */
    public Wind getWind() {
        return wind;
    }

    /**
     * @param wind the wind to set
     */
    public void setWind(Wind wind) {
        this.wind = wind;
    }

    /**
     * @return the clouds
     */
    public Cloud getClouds() {
        return clouds;
    }

    /**
     * @param clouds the clouds to set
     */
    public void setClouds(Cloud clouds) {
        this.clouds = clouds;
    }

    /**
     * @return the dateCreated
     */
    public Date getDateCreated() {
        return dateCreated;
    }

    /**
     * @param dateCreated the dateCreated to set
     */
    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

}
