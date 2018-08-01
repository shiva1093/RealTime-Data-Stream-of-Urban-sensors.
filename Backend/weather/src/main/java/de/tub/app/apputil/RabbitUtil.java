package de.tub.app.apputil;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import java.io.IOException;
import java.util.concurrent.TimeoutException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

/**
 *
 * @author naveed
 */
@Component
@Configuration
@PropertySource("classpath:application.properties")
public class RabbitUtil {

    @Autowired
    private ObjFactory objFactory;
    @Autowired
    private Environment env;

    public Connection getConnection() throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost(env.getProperty("spring.rabbitmq.host"));
        if (env.getProperty("spring.rabbitmq.username") != null && !env.getProperty("spring.rabbitmq.username").isEmpty()) {
            factory.setUsername(env.getProperty("spring.rabbitmq.username"));
            factory.setPassword(env.getProperty("spring.rabbitmq.password"));
        }
        if (env.getProperty("spring.rabbitmq.port") != null && !env.getProperty("spring.rabbitmq.port").isEmpty()) {
            factory.setPort(new Integer(env.getProperty("spring.rabbitmq.port")));
        }

        Connection connection = factory.newConnection();
        configure(connection);

        return connection;
    }

    public void configure(Connection connection) throws IOException, TimeoutException {
        Channel channel = connection.createChannel();

        channel.queueDeclareNoWait(env.getRequiredProperty("rabbitmq.queue_name.weather"), true, false, false, null);
        channel.queueDeclareNoWait(env.getRequiredProperty("rabbitmq.queue_name.day_info"), true, false, false, null);
    }
}
