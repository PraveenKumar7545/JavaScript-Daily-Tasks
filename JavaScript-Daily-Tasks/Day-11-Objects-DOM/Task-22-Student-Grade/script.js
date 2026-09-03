// Create Student Object

let student = {
    name: "Praveen",
    mark: 85
};


// Function

function calculateGrade() {

    let grade;

    // Check Grade

    if (student.mark > 90) {

        grade = "O Grade";

    }
    else if (student.mark >= 75) {

        grade = "A Grade";

    }
    else if (student.mark >= 60) {

        grade = "B Grade";

    }
    else if (student.mark >= 50) {

        grade = "C Grade";

    }
    else if (student.mark >= 35) {

        grade = "D Grade";

    }
    else {

        grade = "F Grade";
    }


    // Display Output

    let output = document.getElementById("output");

    output.innerHTML =
        "Student Name: " + student.name +
        "<br>Mark: " + student.mark +
        "<br>Grade: " + grade;
}