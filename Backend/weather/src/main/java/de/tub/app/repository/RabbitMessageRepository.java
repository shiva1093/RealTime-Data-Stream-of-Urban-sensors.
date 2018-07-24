package de.tub.app.repository;

import de.tub.app.domain.RabbitMessage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RabbitMessageRepository extends MongoRepository<RabbitMessage, String> {

    public Page<RabbitMessage> findByCategory(String category, Pageable pageable);
}
