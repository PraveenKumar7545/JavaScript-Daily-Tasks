function calculateNumbers() {

    let input = document.getElementById("numberInput").value;

    let numbers = input.split(",").map(Number);

    // Original Numbers
    document.getElementById("original").innerText = numbers.join(", ");

    // Double the numbers
    let doubledNumbers = numbers.map(function(num) {
        return num * 2;
    });

    document.getElementById("doubled").innerText = doubledNumbers.join(", ");

    // Find even numbers
    let evenNumbers = numbers.filter(function(num) {
        return num % 2 === 0;
    });

    document.getElementById("even").innerText = evenNumbers.join(", ");

    // Find total
    let total = numbers.reduce(function(sum, num) {
        return sum + num;
    }, 0);

    document.getElementById("total").innerText = total;
}