
const nums = [1, 2, 3];

const stringNumbers = nums.map(function (num) {
    return String(num);
});

document.getElementById("task1").innerHTML =
    stringNumbers.join(", ");


const arr = ["a", "b", "c"];

const indexValues = arr.map(function (value, index) {
    return value + index;
});

document.getElementById("task2").innerHTML =
    indexValues.join(", ");


const words = ["apple", "banana"];

const capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

document.getElementById("task3").innerHTML =
    capitalizedWords.join(", ");


const scores = [90, 45, 75, 30];

const results = scores.map(function (score) {

    if (score >= 40) {
        return "pass";
    } else {
        return "fail";
    }

});

document.getElementById("task4").innerHTML =
    results.join(", ");


const prices = [50, 100];

const formattedPrices = prices.map(function (price) {
    return "$" + price;
});

document.getElementById("task5").innerHTML =
    formattedPrices.join(", ");