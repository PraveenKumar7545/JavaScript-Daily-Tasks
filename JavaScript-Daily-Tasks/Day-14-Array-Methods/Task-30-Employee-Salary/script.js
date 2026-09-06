function analyzeSalary() {

    let input = document.getElementById("salaryInput").value;

    let salaries = input.split(",").map(Number);

    // Display all salaries
    document.getElementById("allSalaries").innerText =
        salaries.join(", ");

    // Salaries above 40000
    let aboveSalary = salaries.filter(function(salary) {

        return salary > 40000;

    });

    document.getElementById("aboveSalary").innerText =
        aboveSalary.join(", ");

    // Salaries below 40000
    let belowSalary = salaries.filter(function(salary) {

        return salary < 40000;

    });

    document.getElementById("belowSalary").innerText =
        belowSalary.join(", ");


    // Highest salary
    let highestSalary = Math.max(...salaries);

    document.getElementById("highestSalary").innerText =
        highestSalary;


    // Lowest salary
    let lowestSalary = Math.min(...salaries);

    document.getElementById("lowestSalary").innerText =
        lowestSalary;


    // Total salary
    let totalSalary = salaries.reduce(function(total, salary) {

        return total + salary;

    }, 0);

    document.getElementById("totalSalary").innerText =
        totalSalary;


    // Average salary
    let averageSalary = totalSalary / salaries.length;

    document.getElementById("averageSalary").innerText =
        averageSalary.toFixed(2);
}