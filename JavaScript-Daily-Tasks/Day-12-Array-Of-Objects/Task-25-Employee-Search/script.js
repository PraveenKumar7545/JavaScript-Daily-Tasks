let employees = [

    {
        name: "Praveen",
        department: "Development",
        salary: 30000
    },

    {
        name: "Arun",
        department: "Testing",
        salary: 28000
    },

    {
        name: "Karthik",
        department: "Design",
        salary: 32000
    },

    {
        name: "Vijay",
        department: "Marketing",
        salary: 35000
    }

];


function searchEmployee() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let output =
        document.getElementById("output");

    let found = false;

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].name.toLowerCase() === searchValue) {

            output.innerHTML =
                "<h2>Employee Found</h2>" +
                "<p>Name: " + employees[i].name + "</p>" +
                "<p>Department: " + employees[i].department + "</p>" +
                "<p>Salary: ₹" + employees[i].salary + "</p>";

            found = true;

            break;
        }
    }


    if (found === false) {

        output.innerHTML =
            "<h2>Employee Not Found</h2>" +
            "<p>Please enter a valid employee name.</p>";
    }
}