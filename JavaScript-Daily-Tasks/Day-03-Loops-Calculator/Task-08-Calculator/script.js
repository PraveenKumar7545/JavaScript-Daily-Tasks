let number1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let number2 = Number(prompt("Enter second number:"));

let result;

switch (operator) {

    case "+":
        result = number1 + number2;
        break;

    case "-":
        result = number1 - number2;
        break;

    case "*":
        result = number1 * number2;
        break;

    case "/":
        if (number2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = number1 / number2;
        }
        break;

    default:
        result = "Invalid operator";
}

document.getElementById("result").innerText =
    number1 + " " + operator + " " + number2 + " = " + result;