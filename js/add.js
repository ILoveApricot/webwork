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

function checkisnull() {
    var head = document.getElementById("head");
    var text = document.getElementById("text");
    if (head.value.length == 0) {
        alert("请输入标题");
    } else if (text.value.length == 0) {
        alert("请输入文本")
    } else {
        alert("发布成功")
    }
}