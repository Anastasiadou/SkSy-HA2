# SimpleTodo
A simple Todo Tracker

## Development

Import this project as a Maven project.

For IntelliJ IDEA:


Open -> direct to Project Folder -> choose *pom.xml* -> click on *Open as Project*


## How to run

In order to run the Application you need to haven maven installed.

If you have it not installed, use this command:

```bash
sudo apt-get install mvn
```

Now run this, it will compile the Application jar:
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
