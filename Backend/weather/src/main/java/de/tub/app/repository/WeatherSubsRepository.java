package de.tub.app.repository;

import de.tub.app.domain.weather.GeoLocation;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WeatherSubsRepository extends MongoRepository<GeoLocation, String> {

    public List<GeoLocation> findAll();

    public GeoLocation findOneByLocation(String location);

    public GeoLocation findOneByLonAndLat(Double lon, Double lat);
}
