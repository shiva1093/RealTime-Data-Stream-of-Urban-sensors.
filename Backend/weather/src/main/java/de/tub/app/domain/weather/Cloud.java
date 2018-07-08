package de.tub.app.domain.weather;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Cloud {

    private Integer all;

    public Cloud() {
    }

    public Cloud(Integer all) {
        this.all = all;
    }

    /**
     * @return the all
     */
    public Integer getAll() {
        return all;
    }

    /**
     * @param all the all to set
     */
    public void setAll(Integer all) {
        this.all = all;
    }

}
