package de.tub.app.repository;

import de.tub.app.domain.sun.SunInfo;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SunInfoRepository extends MongoRepository<SunInfo, String> {

    public List<SunInfo> findByLongitudeAndLatitude(Double longitude, Double latitude);

    public List<SunInfo> findAll();
}
