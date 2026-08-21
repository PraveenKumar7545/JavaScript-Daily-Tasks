const numbers = [10, 20, 30, 40, 50];


// Empty array for reversed values

let reversedArray = [];


// Reverse the array using a loop

for (let i = numbers.length - 1; i >= 0; i--) {

    reversedArray.push(numbers[i]);

}


// Display output

console.log("Original Array:", numbers);

console.log("Reversed Array:", reversedArray);