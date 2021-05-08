package com.tuberlin.sksy.SimpleTodo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

    @RequestMapping("/todos")
    public List<Todo> getAllTodos(){
        return todoService.getTodos();
    }

    @RequestMapping("/todos/{id}")
    public Todo getTodo(@PathVariable String id){
        return todoService.getTodo(id);
    }

    @RequestMapping(method= RequestMethod.POST, value = "/todos")
    public void addTodo(@RequestBody Todo todo){
        todoService.addTodo(todo);
    }

    @RequestMapping(method= RequestMethod.PUT, value = "/todos/{id}")
    public void updateTodo(@RequestBody Todo todo, @PathVariable String id){
        todoService.updateTodo(todo,id);
    }

    @RequestMapping(method= RequestMethod.DELETE, value = "/todos/{id}")
    public void removeTodo(@PathVariable String id){
        todoService.removeTodo(id);
    }
}
