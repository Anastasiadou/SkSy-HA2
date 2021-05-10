# SimpleTodo
A simple Todo Tracker

## Requirements

To run this application you need to have at least Java 8, Maven and Docker installed:

For Docker visit https://www.docker.com/products/docker-desktop.

To install Maven:

```bash
sudo apt-get install mvn
```

## How to run

First start the MySQL database with docker-compose.

Navigate to the working directory and run: 

```bash
docker-compose up
```

After that let Maven compile our Application
```bash
mvn clean install
```

After that you can run the Application by executing the compiled jar:
```bash
java -jar target/SimpleTodo-0.0.1-SNAPSHOT.jar
```

The Application will be reachable at port 8080:

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

## Development

Import this project as a Maven project.

For IntelliJ IDEA:


Open -> direct to Project Folder -> choose *pom.xml* -> click on *Open as Project*

