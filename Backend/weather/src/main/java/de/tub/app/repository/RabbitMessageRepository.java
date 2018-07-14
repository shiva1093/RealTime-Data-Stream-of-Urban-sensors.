package de.tub.app.repository;

import de.tub.app.domain.RabbitMessage;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RabbitMessageRepository extends MongoRepository<RabbitMessage, String> {

//    public List<RabbitMessage> findByLongitudeAndLatitude(Double longitude, Double latitude);
    public List<RabbitMessage> findAll();
}