package com.hamburgersct.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "hamburger", "Learn to code", new Date(), false));
        todos.add(new Todo(++idCounter, "hamburger", "Learn React", new Date(), false));
        todos.add(new Todo(++idCounter, "hamburger", "Learn RESTful API", new Date(), false));
    }
    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo deleted = findById(id);
        // if the to-be-deleted one does not exist, return null then
        if (deleted == null) return null;
        // todos.remove() uses equals(), we have to define that in Todo class
        todos.remove(deleted);
        return deleted;
    }

    private Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id)
                return todo;
        }
        return null;
    }


}
