package com.tuberlin.sksy.SimpleTodo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getTodos() {
        List<Todo> todos = new ArrayList<>();
        todoRepository.findAll().forEach(todos::add);
        return todos;
    }

    public Todo getTodo(String id) {
        return todoRepository.findById(id).get();
    }

    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public void updateTodo(Todo todo, String id) {
        if(todo.getId().equals(id)) todoRepository.save(todo);

    }

    public void removeTodo(String id) {
        todoRepository.deleteById(id);
    }
}