package com.hamburgersct.rest.webservices.restfulwebservices.basic;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// A Controller which can handle REST request
// Controller
@RestController
// CrossOrigin allows Spring Boot process requests from different origins/ports (rather than only this 8080 port)
@CrossOrigin(origins = "http://localhost:4200/")
public class BasicAuthenticationController {

    // GET
    // URI: /hello-world
    // method - "Hello World"

    // return a Bean back instead of a String
    @GetMapping(path = "/basicauth")
    public AuthenticationBean authenticationBean() {
        return new AuthenticationBean("Authenticated");
    }
}
