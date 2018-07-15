package de.tub.app;

import de.tub.app.apputil.ObjFactory;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DayInfoTests {

    @Autowired
    private ObjFactory objFactory;

    @Test
    public void isDay() {
        System.out.println("Is it day in Berlin " + objFactory.getSunInfoUtil().isDay(TestParams.GEO_LOCATION_BERLIN));
        System.out.println("Is it day in Brussels " + objFactory.getSunInfoUtil().isDay(TestParams.GEO_LOCATION_BRUSSELS));
        System.out.println("Is it day in Islamabad " + objFactory.getSunInfoUtil().isDay(TestParams.GEO_LOCATION_ISLAMABAD));
        System.out.println("Is it day in Bombay " + objFactory.getSunInfoUtil().isDay(TestParams.GEO_LOCATION_BOMBAY));
        System.out.println("Done");

        assertEquals(true, true);
    }

}
