package com.tuberlin.sksy.SimpleTodo.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TodoService {

    private List<Todo> todos = new ArrayList<>(Arrays.asList(
            new Todo("1","Einkaufen gehen","1.1.2011","0"),
            new Todo("2","HA 2 erledigen","13.5.2021","20"),
            new Todo("3","Essen","3.5.2021","0")
            ));

    public List<Todo> getTodos() {
        return todos;
    }

    public Todo getTodo(String id){
        return todos.stream().filter(todo -> todo.getId().equals(id)).findFirst().get();
    }

    public void addTodo(Todo todo){
        todos.add(todo);
    }

    public void updateTodo(Todo todo, String id){
        for(int i=0; i<todos.size(); i++){
            if (todos.get(i).getId().equals(id)) {
                todos.set(i,todo);
                return;
            }
        }
    }

    public void removeTodo(String id) {
        todos.removeIf(todo -> todo.getId().equals(id));
    }
}