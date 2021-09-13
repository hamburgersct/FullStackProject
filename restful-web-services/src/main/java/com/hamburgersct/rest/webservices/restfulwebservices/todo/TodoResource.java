package com.hamburgersct.rest.webservices.restfulwebservices.todo;

import com.hamburgersct.rest.webservices.restfulwebservices.todo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoService.findById(id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    // if we don't want to return a specific instance after execution, use ResponseEntity to return different response status
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo deleted = todoService.deleteById(id);
        if (deleted != null)
            return ResponseEntity.noContent().build();
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                           @PathVariable long id, @RequestBody Todo todo) {
        Todo todoUpdated = todoService.save(todo);
        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> updateTodo(@PathVariable String username, @RequestBody Todo todo) {
        Todo todoCreated = todoService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
