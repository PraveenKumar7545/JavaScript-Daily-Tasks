// Create a student object

let student = {
    name: "Praveen",
    age: 22,
    course: "JavaScript",
    mark: 85
};


// Function to display student details

function displayStudent() {

    let output = document.getElementById("output");

    output.innerHTML =
        "Name: " + student.name +
        "<br>Age: " + student.age +
        "<br>Course: " + student.course +
        "<br>Mark: " + student.mark;
}