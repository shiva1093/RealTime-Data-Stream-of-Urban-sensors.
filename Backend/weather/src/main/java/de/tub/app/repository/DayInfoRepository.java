package de.tub.app.repository;

import de.tub.app.domain.weather.SunInfo;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DayInfoRepository extends MongoRepository<SunInfo, String> {

    public List<SunInfo> findByLongitudeAndLatitude(Double longitude, Double latitude);

    public List<SunInfo> findAll();
}
