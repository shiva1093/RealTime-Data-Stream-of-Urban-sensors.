package de.tub.app;

import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.weather.WeatherDetails;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WeatherTests {

    @Autowired
    private ObjFactory objFactory;

    @Test
    public void getWeather() {
        assertEquals(objFactory.getAppUtil().getWeather(TestParams.GEO_LOCATION_BERLIN).getName() != null, true);
        assertEquals(objFactory.getAppUtil().getWeather(TestParams.GEO_LOCATION_ISLAMABAD).getName() != null, true);
    }

    @Test
    public void checkCondition() {
        assertEquals(objFactory.getConditionUtil().checkCondition(
                objFactory.getAppUtil().getWeather(TestParams.GEO_LOCATION_BERLIN),
                TestParams.TEST_CONDITION_TEMP), true);
    }

}
