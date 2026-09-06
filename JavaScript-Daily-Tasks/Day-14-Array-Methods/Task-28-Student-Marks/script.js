function analyzeMarks() {

    let input = document.getElementById("marksInput").value;

    let marks = input.split(",").map(Number);

    // Display all marks
    document.getElementById("allMarks").innerText =
        marks.join(", ");


    // Passed students
    let passedMarks = marks.filter(function(mark) {
        return mark >= 50;
    });

    document.getElementById("passed").innerText =
        passedMarks.join(", ");


    // Failed students
    let failedMarks = marks.filter(function(mark) {
        return mark < 50;
    });

    document.getElementById("failed").innerText =
        failedMarks.join(", ");


    // Highest mark
    let highestMark = Math.max(...marks);

    document.getElementById("highest").innerText =
        highestMark;


    // Lowest mark
    let lowestMark = Math.min(...marks);

    document.getElementById("lowest").innerText =
        lowestMark;


    // Total marks
    let totalMarks = marks.reduce(function(total, mark) {
        return total + mark;
    }, 0);

    document.getElementById("total").innerText =
        totalMarks;


    // Average
    let averageMark = totalMarks / marks.length;

    document.getElementById("average").innerText =
        averageMark.toFixed(2);
}