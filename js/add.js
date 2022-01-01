function hide1() {
    var flag = document.getElementById("check1").checked;

    if (flag == true) {
        document.getElementById("hardcore").setAttribute("class", "hardcore");
    } else {
        document.getElementById("hardcore").setAttribute("class", "none");
    }
}

function hide2() {
    var flag = document.getElementById("check2").checked;

    if (flag == true) {
        document.getElementById("fun").setAttribute("class", "fun");
    } else {
        document.getElementById("fun").setAttribute("class", "none");
    }
}