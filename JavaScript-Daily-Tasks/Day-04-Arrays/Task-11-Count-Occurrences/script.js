// Array

const numbers = [10, 20, 10, 30, 10, 40, 20];


// Number to search

const searchNumber = 10;


// Occurrence count

let count = 0;


// Check each array element

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === searchNumber) {

        count++;

    }

}


// Display output

console.log("Array:", numbers);

console.log("Number:", searchNumber);

console.log("Occurrences:", count);