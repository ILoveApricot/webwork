let a = "1343.43245";
let b = a.indexOf(".");
console.log(b);
let c = a.substring(0, b + 3);
console.log(c);

function insert(num) {
    document.form.textView.value = document.form.textView.value + num;
}

function equal() {
    let exp = document.form.textView.value;
    if (exp) {
        let eval1 = eval(document.form.textView.value);

        let number = eval1.toString().indexOf(".");
        if (number !== -1) {
            eval1 = eval1.toString().substring(0, number + 3);
            document.form.textView.value = eval1;
        } else {
            document.form.textView.value = eval1;
        }
    }
}

function Mclean() {
    document.form.textView.value = null;
}

function back() {
    let exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);

}