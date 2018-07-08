package de.tub.app.repository;

import de.tub.app.domain.weather.WeatherDetails;
import java.util.Date;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WeatherRepository extends MongoRepository<WeatherDetails, String> {

    public List<WeatherDetails> findByDateCreatedBetween(Date dateFrom, Date dateTo);

    public List<WeatherDetails> findAll();
}
