var data = "Nothing";
var kwasy = [];
function set_data() {
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML = data;
}

function newKwas() {
    var _user = document.getElementById("user").value;
    var _source = document.getElementById("source").value;
    var _title = document.getElementById("title").value;
    var _tag = document.getElementById("tag").value;
    
    document.getElementById("user").value = "";
    document.getElementById("source").value = "";
    document.getElementById("title").value = "";
    document.getElementById("tag").value = "";
    
    axios.post('http://vps487563.ovh.net:44444/api/v1/kwasy', {
        user: _user,
        source: _source,
        title: _title,
        tag: _tag
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}

function getKwasy() {
    axios
    .get("http:/vps487563.ovh.net:44444/api/v1/kwasy")
    .then(function (response) {
    console.log("Response received");
    console.log(response);
    data = response.status;
    console.log(data);
    kwasy = response.data;
    //set_data();
  })
    .catch(function (error) {
    console.log("Error appeared");
  });
}

function fillList() {
    axios
    .get("http:/vps487563.ovh.net:44444/api/v1/kwasy")
    .then(function (response) {
    console.log("Response received");
    //console.log(response);
    data = response.status;
    console.log(data);
    kwasy = response.data;
    var list = document.getElementById("lista");
    for (var i = 0; i < kwasy.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = "<a kref=" + kwasy[i].source + ">" + kwasy[i].title + "</a>";
        console.log(newLi);
        list.appendChild(newLi);
    }
  })
    .catch(function (error) {
    console.log("Error appeared");
  });
}