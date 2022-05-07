function black(){
    var value = document.querySelector("#black").checked;
    if (value == true) {
        var black = allmenData.filter(function (elem, index) {
            return elem.color == "black";
        });
        displayDatamen(black);
    }
    else{
        displayDatamen(allmenData)
    }
}

function offwhite(){
    var value = document.querySelector("#offwhite").checked;
    if (value == true) {
        var offwhite = allmenData.filter(function (elem, index) {
            return elem.color == "offwhite";
        });
        displayDatamen(offwhite);
    }
    else{
        displayDatamen(allmenData)
    }
}

function red(){
    var value = document.querySelector("#red").checked;
    if (value == true) {
        var red = allmenData.filter(function (elem, index) {
            return elem.color == "red";
        });
        displayDatamen(red);
    }
    else{
        displayDatamen(allmenData)
    }
}

function brunellocucinelli(){
    var value = document.querySelector("#brunellocucinelli").checked;
    if (value == true) {
        var brunellocucinelli = allmenData.filter(function (elem, index) {
            return elem.title == "BRUNELLO CUCINELLI";
        });
        displayDatamen(brunellocucinelli);
    }
    else{
        displayDatamen(allmenData)
    }
}

function moncler(){
    var value = document.querySelector("#brunellocucinelli").checked;
    if (value == true) {
        var moncler = allmenData.filter(function (elem, index) {
            return elem.title == "moncler";
        });
        displayDatamen(moncler);
    }
    else{
        displayDatamen(allmenData)
    }
}