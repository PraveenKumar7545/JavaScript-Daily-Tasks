function add() {

    const num1 = Number(
        document.getElementById("firstNumber").value
    );

    const num2 = Number(
        document.getElementById("secondNumber").value
    );

    const result = num1 + num2;

    document.getElementById("output").innerHTML =
        "Addition = " + result;
}


function subtract() {

    const num1 = Number(
        document.getElementById("firstNumber").value
    );

    const num2 = Number(
        document.getElementById("secondNumber").value
    );

    const result = num1 - num2;

    document.getElementById("output").innerHTML =
        "Subtraction = " + result;
}


function multiply() {

    const num1 = Number(
        document.getElementById("firstNumber").value
    );

    const num2 = Number(
        document.getElementById("secondNumber").value
    );

    const result = num1 * num2;

    document.getElementById("output").innerHTML =
        "Multiplication = " + result;
}


function divide() {

    const num1 = Number(
        document.getElementById("firstNumber").value
    );

    const num2 = Number(
        document.getElementById("secondNumber").value
    );

    if (num2 === 0) {

        document.getElementById("output").innerHTML =
            "Cannot divide by zero";

    } else {

        const result = num1 / num2;

        document.getElementById("output").innerHTML =
            "Division = " + result;
    }
}