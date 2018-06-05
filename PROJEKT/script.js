var apiurl = 'http://vps487563.ovh.net:55555/api/v1/to_do/';
var toDoList = document.getElementById("ToDoS");
var todos = "Nothing";

function fillList() {
    document.getElementById("ToDoS").innerHTML = "";
    axios.get(apiurl + 'Valtiel/tasks')
    .then(function (response) {
    console.log("Response received");
    todos = response.data;
    for (var i = 0; i < todos.length; i++)
    {
        var newLi = document.createElement('div');
        newLi.innerHTML = '<div class="el"><p>'+todos[i].title+'</p>Urgency: '+todos[i].urgency+'  Done: <input type="checkbox" id="check'+i+'"><button id="btn'+i+'" onclick="markDone('+i+')">Mark as done</button></div>';
        console.log(newLi);
        toDoList.appendChild(newLi);
        if (todos[i].done == true)
        {
            document.getElementById("check"+i).checked = true;
            document.getElementById("btn"+i).disabled = true;
        }
    }
}).catch(function(error) {
    console.log(error);
});
}

function addToDo() {
    var title = document.getElementById("title");
    var urgency = document.getElementById("urgency");
    
    var _user = "Valtiel";
    var _title = title.value;
    var _urgency = urgency.value;
    var _done = "false";
    
    axios.post(apiurl + 'tasks', {
        user: _user,
        title: _title,
        urgency: _urgency,
        done: _done
    }).then(function(response) {
        console.log(response);
        fillList();
    }).catch(function(error) {
        console.log(error);
    });
}

function markDone(i) {
    if (todos[i].done == false) {
        console.log("Changing: " + i + " " + todos[i]._id);
        axios.put(apiurl + 'tasks/' + todos[i]._id, {
            done: "true"
        }).then(function(response) {
            fillList();
        }).catch(function(error) {
            console.log(error);
        });
    }
}

window.addEventListener('load', fillList, false);