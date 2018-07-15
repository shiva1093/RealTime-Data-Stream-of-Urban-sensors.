/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.tub.app;

import de.tub.app.domain.weather.GeoLocation;

/**
 *
 * @author naveed
 */
public class TestParams {

    public static final GeoLocation GEO_LOCATION_ISLAMABAD = new GeoLocation(73.0479, 33.6844);
    public static final GeoLocation GEO_LOCATION_BERLIN = new GeoLocation(52.5200, 13.4050);
    public static final String TEST_CONDITION_TEMP = "main.temp < 1000";
}
