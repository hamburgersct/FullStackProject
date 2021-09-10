package com.hamburgersct.rest.webservices.restfulwebservices.todo;

import com.hamburgersct.rest.webservices.restfulwebservices.todo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// CrossOrigin allows Spring Boot process requests from different origins/ports (rather than only this 8080 port)
@CrossOrigin(origins = "http://localhost:4200/")
public class TodoResource {
    @Autowired
    private TodoHardcodedService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoService.findAll();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    // if we don't want to return a specific instance after execution, use ResponseEntity to return different response status
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo deleted = todoService.deleteById(id);
        if (deleted != null)
            return ResponseEntity.noContent().build();
        return ResponseEntity.notFound().build();
    }
}
