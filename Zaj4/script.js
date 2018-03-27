console.log("Hello world!");
function getTime() {
    document.getElementById("date").innerHTML = Date();
};

function filter(t, f) {
    var x = [];
    for (var i = 0; i<t.length; i++) {
        if (f(t[i])) {
            x.push(t[i]);
        }
    }
    return x;
};

function notEqual(x) {
    return x!== 3;
};

function showFiltered() {
    var a = filter([1, 2, 3, "3", 4, 5], notEqual);
    console.log(a);
};