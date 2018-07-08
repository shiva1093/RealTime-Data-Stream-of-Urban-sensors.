package de.tub.app;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling
@ComponentScan(basePackages = {
    "com.browngrid.app.apputil",
    "com.browngrid.app.repository",
    "com.browngrid.app.web"
})
public class SpringConfig {

}
