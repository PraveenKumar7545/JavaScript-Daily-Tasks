function findFactorial() {

    let number = Number(document.getElementById("number").value);
    let factorial = 1;

    if (number < 0) {
        document.getElementById("result").innerText =
            "Factorial is not possible for negative numbers.";
        return;
    }

    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }

    document.getElementById("result").innerText =
        "Factorial of " + number + " = " + factorial;
}