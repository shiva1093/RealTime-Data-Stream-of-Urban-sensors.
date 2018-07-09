package de.tub.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.RabbitMessage;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author naveed
 */
@Service
public class CustomMessageListener {

    @Autowired
    private ObjFactory objFactory;

    int count_received = 0;

    @RabbitListener(queues = Constants.QUEUE_GENERIC_NAME)
    public void receiveMessage(byte[] message) {
        count_received++;
        String msg = new String(message, Charset.forName("UTF-8"));

        try {
            System.out.println("CustomMessageListener > Received Message " + count_received);

            ObjectMapper mapper = new ObjectMapper();

            //JSON from String to Object
            RabbitMessage rabbitMessage = mapper.readValue(msg, RabbitMessage.class);

            System.out.println("CustomMessageListener > Received Message " + rabbitMessage.toString());

            System.out.println("CustomMessageListener > Received message as generic byte:  " + msg);

            if (rabbitMessage.getCommand() == null || rabbitMessage.getCommand().equals(RabbitMessage.CommandType.CREATE)) {
                objFactory.getRabbitMessageRepository().save(rabbitMessage);

                System.out.println("CustomMessageListener > Message saved in mongo");
            } else {
                objFactory.getRabbitMessageRepository().delete(rabbitMessage);

                System.out.println("CustomMessageListener > Message saved deleted");
            }
        } catch (IOException ex) {
            Logger.getLogger(CustomMessageListener.class.getName()).log(Level.SEVERE, null, ex);

        } finally {

        }
    }
}
