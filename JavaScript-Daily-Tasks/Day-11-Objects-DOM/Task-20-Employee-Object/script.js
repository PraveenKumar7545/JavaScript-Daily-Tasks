// Create Employee Object

let employee = {
    name: "Praveen",
    age: 25,
    department: "Development",
    salary: 30000
};


// Function

function displayEmployee() {

    let output = document.getElementById("output");

    output.innerHTML =
        "Name: " + employee.name +
        "<br>Age: " + employee.age +
        "<br>Department: " + employee.department +
        "<br>Salary: ₹" + employee.salary;
}