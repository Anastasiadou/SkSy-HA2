class Todo {
    constructor(id, description, deadline, percentage) {
        this.id = id;
        this.description = description;
        this.deadline = deadline;
        this.percentage = percentage;
    }
}

//Handling the Übersicht site
function initUbersicht(){
    presentAllTodos();
}

function presentAllTodos(){
    fetch("http://localhost:8080/todos")
    .then(response => response.json())
    .then(function(allTodos) {
        allTodos.forEach(todo => {
            createTableRow(todo)
        });
    })
}

function createTableRow(todo){
    const tableBody = document.getElementById("todoTableBody")
    var row = document.createElement("tr");

    if(todo["percentage"] == "100") {
        row.classList.add("table-success")
    }
    for (let key in todo){
        let item = document.createElement("td");
        item.innerHTML = todo[key]
        row.appendChild(item)
    }

    //create edit
    var item = document.createElement("td");
    var a = document.createElement('a');
    var linkText = document.createTextNode("Bearbeiten");
    a.appendChild(linkText);
    a.title = "Bearbeiten";
    a.href = "#";
    a.id = "todo"+todo["id"]
    item.appendChild(a)
    row.appendChild(item);

    a.addEventListener('click', function(){
        initTodo(todo)
    })


    //create delete
    var item = document.createElement("td");
    var a = document.createElement('a');
    var linkText = document.createTextNode("Löschen");
    a.appendChild(linkText);
    a.title = "Löschen";
    a.href = "#"; 
    a.id = "todo"+todo["id"]
    item.appendChild(a)
    row.appendChild(item);

    a.addEventListener('click', function(){
        deleteTodo(todo)
    })

    tableBody.appendChild(row)
}

//delete a todo
function deleteTodo(todo){
    var id = todo["id"]
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:8080/todos/" + id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    location.reload()
}

//Edit todos
function initTodo(todo){
    document.getElementById("ubersichtBlock").style.display = "none"
    document.getElementById("editBlock").style.display = "block"

    document.getElementById("todoID").innerHTML = todo["id"]
    document.getElementById("todoText").value = todo["description"]
    document.getElementById("todoDeadline").value = todo["deadline"]
    document.getElementById("todoProzent").value = todo["percentage"]
}

function editTodo(event){
    //get todo count
    var id = document.getElementById("todoID").innerHTML
    var description = document.getElementById("todoText").value
    var deadline= document.getElementById("todoDeadline").value;
    var percentage = document.getElementById("todoProzent").value;

    var todo = new Todo(id,description,deadline,percentage)
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:8080/todos/" + id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(todo));
    location.reload()
    event.preventDefault()
}



//create a todo when form is submitted
function addTodo(event){
    //create Todo object ans make request to database
    fetch("http://localhost:8080/todos")
    .then(response => response.json())
    .then(function(allTodos) {
        //get todo count
        var id = allTodos.length + 1
        //get form values
        var description = document.getElementById("todoText").value
        var deadline= document.getElementById("todoDeadline").value;
        var percentage = document.getElementById("todoProzent").value;
        
        var todo = new Todo(id,description,deadline,percentage)

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/todos/", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(todo));
        location.reload()
    })
    event.preventDefault()
}

