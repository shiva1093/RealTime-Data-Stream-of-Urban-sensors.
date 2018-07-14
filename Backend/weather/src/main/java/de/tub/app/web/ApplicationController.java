package de.tub.app.web;

import de.tub.app.apputil.ObjFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ApplicationController {

    @Autowired
    private ObjFactory objFactory;

    @GetMapping("/")
    @ResponseBody
    public String baseLink() {
        return "BrownGrid Server";
    }

    @GetMapping("/health")
    @ResponseBody
    public String health() {
        return "healthy";
    }

    @GetMapping("/ping")
    @ResponseBody
    public String ping() {
        return "Ping response from the controller.";
    }

}
