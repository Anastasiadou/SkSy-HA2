package com.tuberlin.sksy.SimpleTodo.todo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Todo {

    @Id
    private String id;
    private String description;
    private String deadline;
    private String percentage;

    public Todo() {
    }

    public Todo(String id, String description, String deadline, String percentage) {
        this.id = id;
        this.description = description;
        this.deadline = deadline;
        this.percentage = percentage;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getPercentage() {
        return percentage;
    }

    public void setPercentage(String percentage) {
        this.percentage = percentage;
    }
}
