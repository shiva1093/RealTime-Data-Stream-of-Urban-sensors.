package de.tub.app.message;

import java.util.concurrent.CountDownLatch;
import org.springframework.stereotype.Component;

/**
 *
 * @author Naveed Kamran
 */
@Component
public class Receiver {

    private CountDownLatch countDownLatch = new CountDownLatch(1);

    public void receiveMessage(String message) {
//        System.out.println("Received Message: " + message);
//        countDownLatch.countDown();
    }

    public CountDownLatch getLatch() {
        return countDownLatch;
    }
}
