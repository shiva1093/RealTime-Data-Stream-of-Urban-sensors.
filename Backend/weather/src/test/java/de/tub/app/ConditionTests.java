package de.tub.app;

import de.tub.app.apputil.ObjFactory;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ConditionTests {

    @Autowired
    private ObjFactory objFactory;

    @Test
    public void findAllConditions() {
        PageRequest pageRequest1 = PageRequest.of(0, 2);
        PageRequest pageRequest2 = PageRequest.of(1, 2);
        assertEquals(objFactory.getRabbitMessageRepository().findAll(pageRequest1).getTotalElements() > 0, true);
        assertEquals(objFactory.getRabbitMessageRepository().findAll(pageRequest2).getTotalElements() > 0, true);
    }

}
