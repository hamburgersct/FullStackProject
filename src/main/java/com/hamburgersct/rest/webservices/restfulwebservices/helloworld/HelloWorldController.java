package com.hamburgersct.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

// A Controller which can handle REST request
// Controller
@RestController
// CrossOrigin allows Spring Boot process requests from different origins/ports (rather than only this 8080 port)
@CrossOrigin(origins = "http://localhost:4200/")
public class HelloWorldController {

    // GET
    // URI: /hello-world
    // method - "Hello World"

    // map a GET request to this URI
    @GetMapping(path = "/hello-world")
    // or below:
    // @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    // return a Bean back instead of a String
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World Bean");
    }

    // hello-world/path-variable/hamburgersct
    @GetMapping(path = "/hello-world/path-variable/{name}")
    // with @PathVariable, the param name is mapped to {name} in path
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//        throw new RuntimeException("Something went wrong");
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
