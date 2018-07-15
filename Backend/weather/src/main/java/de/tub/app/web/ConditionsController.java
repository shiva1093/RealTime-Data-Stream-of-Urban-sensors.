package de.tub.app.web;

import de.tub.app.apputil.ObjFactory;
import de.tub.app.domain.RabbitMessage;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ConditionsController {

    @Autowired
    private ObjFactory objFactory;

    @RequestMapping(value = "/condition", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<RabbitMessage>> check_condition_weather(
            @RequestParam(name = "pageSize", required = true) int pageSize,
            @RequestParam(name = "start", required = true) int start) {
        try {
            PageRequest pageRequest = PageRequest.of(start, pageSize);

            return new ResponseEntity(objFactory.getRabbitMessageRepository().findAll(pageRequest), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity(false, HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "/condition/search/{category}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<RabbitMessage>> check_condition_weather(
            @RequestParam(name = "pageSize", required = true) int pageSize,
            @RequestParam(name = "start", required = true) int start,
            @PathVariable(name = "category", required = true) String category) {
        try {
            PageRequest pageRequest = PageRequest.of(start, pageSize);

            return new ResponseEntity(objFactory.getRabbitMessageRepository().findByCategory(category, pageRequest), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity(false, HttpStatus.NOT_FOUND);
        }

    }

}
