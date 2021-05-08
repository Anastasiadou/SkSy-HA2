# SimpleTodo
A simple Todo Tracker

## Set up

Import this project as a Maven project.

For IntelliJ IDEA:


Open -> direct to Project Folder -> choose *pom.xml* -> click on *Open as Project*


## Start Up

In order to run the Application just run the *main()* method of the SimpleTodoApplication.java.

The Application will be reachable at:

```bash
http://localhost:8080/
```

## REST API

This Application implements a simple Web Application with a REST API. The following API calls are implemented.

### *GET* Requests
```bash
GET http://localhost:8080/todos     #returns a list of all TODOS as JSON
GET http://localhost:8080/todos/id  #returns the TODO with the given ID
```

### *POST* Requests
The body of the POST-requests needs to be a JSON with a TODO object with the necessary key-value pairs.  You can find the JSON format [here](#json-format).
``` bash
POST http://localhost:8080/todos     #Adds a TODO
```

### *PUT* Requests
The body of the PUT-requests needs to be a JSON with a TODO object with the necessary key-value pairs. You can find the JSON format [here](#json-format).
```bash
PUT http://localhost:8080/todos/id  #Edits/Updates the TODO with the given ID
```
### *DELETE* Requests
```bash
DELETE http://localhost:8080/todos/id  #Deletes the TODO with the given ID
```

### JSON Format

```bash
{
    "id": "1",
    "description": "Einkaufen gehen",
    "deadline": "1.1.2011",
    "percentage": "0"
}
```
