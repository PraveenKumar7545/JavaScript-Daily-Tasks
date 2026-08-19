// Task 10 - Find Largest Number

const numbers = [25, 67, 12, 89, 45];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {

        largest = numbers[i];

    }

}

console.log("Array:", numbers);

console.log("Largest Number:", largest);