package de.tub.app;

import de.tub.app.domain.weather.GeoLocation;

/**
 *
 * @author naveed
 */
public class TestParams {

    public static final GeoLocation GEO_LOCATION_ISLAMABAD = new GeoLocation(73.0479, 33.6844);
    public static final GeoLocation GEO_LOCATION_BOMBAY = new GeoLocation(72D, 19D);
    public static final GeoLocation GEO_LOCATION_BERLIN = new GeoLocation(13.4050, 52.5200);
    public static final GeoLocation GEO_LOCATION_BRUSSELS = new GeoLocation(4D, 50D);
    public static final String TEST_CONDITION_TEMP = "main.temp < 1000";
}
