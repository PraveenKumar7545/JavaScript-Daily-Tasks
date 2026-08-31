function calculateResult() {

    const mark1 = Number(document.getElementById("mark1").value);
    const mark2 = Number(document.getElementById("mark2").value);
    const mark3 = Number(document.getElementById("mark3").value);
    const mark4 = Number(document.getElementById("mark4").value);
    const mark5 = Number(document.getElementById("mark5").value);

    const output = document.getElementById("output");

    if (
        mark1 === 0 ||
        mark2 === 0 ||
        mark3 === 0 ||
        mark4 === 0 ||
        mark5 === 0
    ) {
        output.innerHTML = "Please enter all marks";
        return;
    }

    const total =
        mark1 + mark2 + mark3 + mark4 + mark5;

    const average = total / 5;

    let grade;

    if (
        mark1 < 35 ||
        mark2 < 35 ||
        mark3 < 35 ||
        mark4 < 35 ||
        mark5 < 35
    ) {

        grade = "F Grade";

    } else if (average > 90) {

        grade = "O Grade";

    } else if (average >= 75) {

        grade = "A Grade";

    } else if (average >= 60) {

        grade = "B Grade";

    } else if (average >= 50) {

        grade = "C Grade";

    } else {

        grade = "D Grade";
    }

    output.innerHTML =
        "Total Marks: " + total +
        "<br>Average: " + average +
        "<br>Grade: " + grade;
}