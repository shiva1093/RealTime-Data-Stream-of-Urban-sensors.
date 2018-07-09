package de.tub.app;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling
@ComponentScan(basePackages = {
    "de.tub.app.apputil",
    "de.tub.app.repository",
    "de.tub.app.web"
})
public class SpringConfig {

}
