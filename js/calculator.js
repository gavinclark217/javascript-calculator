let button = document.getElementById("button");

button.addEventListener("click", calculate);

function calculate() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    var answer;

    if (document.getElementById("add").checked) {
        answer = Number(num1) + Number(num2);
    }
    if (document.getElementById("subtract").checked) {
        answer = Number(num1) - Number(num2);
    }
    if (document.getElementById("multiply").checked) {
        answer = Number(num1) * Number(num2);
    }
    if (document.getElementById("divide").checked) {
        answer = Number(num1) / Number(num2);
    }

    document.getElementById("answer").innerHTML = answer;
}