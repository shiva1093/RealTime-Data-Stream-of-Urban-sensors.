package de.tub.app.domain.weather;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Objects;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class GeoLocation {

    private Double lon;
    private Double lat;
    private String location;

    public GeoLocation() {
    }

    public GeoLocation(String location) {
        this.location = location;
    }

    public GeoLocation(Double lon, Double lat) {
        this.lon = lon;
        this.lat = lat;
        this.normalize();
    }

    @Override
    public String toString() {
        return "GeoLocation{" + "lon=" + getLon() + ", lat=" + getLat() + '}';
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 59 * hash + Objects.hashCode(this.lon);
        hash = 59 * hash + Objects.hashCode(this.lat);
        return hash;
    }

    public void normalize() {
        NumberFormat formatter = new DecimalFormat("#0.00");
        this.lon = new Double(formatter.format(this.lon));
        this.lat = new Double(formatter.format(this.lat));
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final GeoLocation other = (GeoLocation) obj;
        if (!Objects.equals(this.lon, other.lon)) {
            return false;
        }
        if (!Objects.equals(this.lat, other.lat)) {
            return false;
        }
        return true;
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
     * @return the location
     */
    public String getLocation() {
        return location;
    }

    /**
     * @param location the location to set
     */
    public void setLocation(String location) {
        this.location = location;
    }

}
