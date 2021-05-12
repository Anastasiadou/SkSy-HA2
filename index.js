const ubersicht = document.querySelector(".ubersicht.html");
const submit = document.querySelector(".submit");

function loadneuesTodo(){
    fetch("http://localhost:8080/todos")
    .then(response => response.json())
    .then(function(neuestodo) {
        neuestodo.forEach(function(todo) {
        const div = document.createElement("div");
        div.innerHTML = todo.name;
        ubersicht.html.appendChild(div);      
    });
   });
}

submit.addEventListener("click", function() {
  ubersicht.html.innerHTML = "";
  loadneuesTodo();
})

const deletetodos = document.querySelector(".delete");

function deleteTodo(){
    fetch("http://localhost:8080/todos/id")
    .then(response => response.json())
    .then(function(deletetodo) {
        deletetodo.forEach(function(todo) {
            var elem = todo.target;
            var main = document.getElementById("button");
            if (main != elem) {
              var parent = elem.parentNode;
              parent.removeChild(elem);
              return false;
            }  
    });

  });
}

deletetodos.addEventListener("click", function() {
  deleteTodo();
})

const edit = document.querySelector(".edit");

function editTodo(){
    fetch("http://localhost:8080/todos/id")
    .then(response => response.json())
    .then(function GetInput () {
            var Input = document.getElementsByClassName("todoEdit").value; 
            document.getElementById("übersicht.html").innerHTML= (Input);
    });
}

edit.addEventListener("click", function() {
  edit.html.innerHTML = '';
  GetInput();
})





/*window.onload = function(){
    let li = document.querySelectorAll('a[href="ubersicht.html"]');
    [...li].forEach(function klickFunktionalität(){
        var elem = document.getElementById("button");
        elem.addEventListener('click', elementEntfernen);	
    })
      
    function elementEntfernen(e) {
        var elem = e.target;
        var main = document.getElementById("button");
        if (main != elem) {
          var parent = elem.parentNode;
          parent.removeChild(elem);
          return false;
        }
    }
  
    document.addEventListener('DOMContentLoaded', klickFunktionalität);

    let lo = document.querySelectorAll();
    [...lo].forEach(function anlegen(){
        var inhalt = document.getElementById("anlegen.html");
        console.log(inhalt);
    })

    function GetInput () {
        var Input = document.getElementsByClassName("TodoEdit").value; 
        document.getElementById('übersicht.html').innerHTML= (Input);
    }

}*/

