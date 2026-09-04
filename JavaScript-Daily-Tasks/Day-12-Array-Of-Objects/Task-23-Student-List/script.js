let students = [

    {
        name: "Praveen",
        age: 22,
        mark: 85
    },

    {
        name: "Arun",
        age: 21,
        mark: 72
    },

    {
        name: "Karthik",
        age: 23,
        mark: 91
    }

];


function displayStudents() {

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        output.innerHTML +=
            "<div>" +
            "<h3>" + students[i].name + "</h3>" +
            "<p>Age: " + students[i].age + "</p>" +
            "<p>Mark: " + students[i].mark + "</p>" +
            "</div>";
    }
}