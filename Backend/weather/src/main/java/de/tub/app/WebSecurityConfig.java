package de.tub.app;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 *
 * @author naveed
 */
@Configuration
@Order(-20) // Very important
@PropertySource("classpath:application.properties")
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private Environment env;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/**").permitAll();
    }

    @Bean
    CorsConfigurationSource getCorsConfigurationSource() {
        System.out.println("<<<<<<<<<<<<<<<<<<< Adding cors info >>>>>>>>>>>>>>>>>>>>>");
        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(Arrays.asList(
//                "http://localhost", "https://localhost",
//                "http://localhost:9990", "https://localhost:9990",
//                "http://localhost:9991", "https://localhost:9991",
//                "http://localhost:9992", "https://localhost:9992",
//                "http://localhost:9993", "https://localhost:9993",
//                "http://localhost:9994", "https://localhost:9994",
//                "http://localhost:9995", "https://localhost:9995",
//                "http://localhost:9996", "https://localhost:9996"));

        String properties = env.getProperty("security.allowed_origins");
        if (properties != null) {
            List<String> cors = Arrays.asList(
                    env.getProperty("security.allowed_origins").split(","));

            if (cors != null && !cors.isEmpty()) {
                config.setAllowedOrigins(cors);

                System.out.println("CORS Added " + properties);
            } else {
                System.out.println("CORS Not Added as List is emptry");
            }
        } else {
            System.out.println("CORS Not Added as no input given");
        }

//        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.setAllowCredentials(Boolean.TRUE); //If this is not set then notification system can not work

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
