function calculateGrade() {

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);

    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let average = total / 5;

    let grade;

    if (mark1 < 35 || mark2 < 35 || mark3 < 35 || mark4 < 35 || mark5 < 35) {
        grade = "F Grade";
    }
    else if (average > 90) {
        grade = "O Grade";
    }
    else if (average >= 75) {
        grade = "A Grade";
    }
    else if (average >= 60) {
        grade = "B Grade";
    }
    else if (average >= 50) {
        grade = "C Grade";
    }
    else {
        grade = "D Grade";
    }

    document.getElementById("result").innerHTML =
        "Total: " + total + "<br>" +
        "Average: " + average + "<br>" +
        "Grade: " + grade;
}