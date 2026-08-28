
const text1 = "Hello";

const reversedText = text1
    .split("")
    .reverse()
    .join("");

document.getElementById("task1").innerHTML =
    text1 + " → " + reversedText;

const text2 = "Mom";

const originalText = text2.toLowerCase();

const reverseText = originalText
    .split("")
    .reverse()
    .join("");

if (originalText === reverseText) {

    document.getElementById("task2").innerHTML =
        text2 + " → Palindrome";

} else {

    document.getElementById("task2").innerHTML =
        text2 + " → Not a Palindrome";

}


const text3 = "Hello";

let vowels = "";

for (let char of text3.toLowerCase()) {

    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {

        vowels += char;

    }

}

document.getElementById("task3").innerHTML =
    text3 + " → " + vowels;


const text4 = "Hello";

let consonants = "";

for (let char of text4.toLowerCase()) {

    if (
        char >= "a" &&
        char <= "z" &&
        !(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        )
    ) {

        consonants += char;

    }

}

document.getElementById("task4").innerHTML =
    text4 + " → " + consonants;


const text5 = "Hello";

let vowelCount = 0;
let consonantCount = 0;

for (let char of text5.toLowerCase()) {

    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {

        vowelCount++;

    }

    else if (char >= "a" && char <= "z") {

        consonantCount++;

    }

}

document.getElementById("task5").innerHTML =
    "Vowels: " + vowelCount +
    " | Consonants: " + consonantCount;


const text6 = "hello world javascript";

const capitalizedSentence = text6
    .split(" ")
    .map(function (word) {

        return word.charAt(0).toUpperCase() +
               word.slice(1);

    })
    .join(" ");

document.getElementById("task6").innerHTML =
    capitalizedSentence;