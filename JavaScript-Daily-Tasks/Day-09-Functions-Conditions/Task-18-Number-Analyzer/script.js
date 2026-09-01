function analyzeNumber() {

    // Get the value from input
    let number = Number(document.getElementById("number").value);

    // Get output element
    let output = document.getElementById("output");

    // Check if input is empty
    if (document.getElementById("number").value === "") {

        output.innerHTML = "Please enter a number.";

    }

    // Check positive, negative or zero
    else if (number > 0) {

        if (number % 2 === 0) {

            output.innerHTML =
                "Number: " + number +
                "<br>Type: Positive Number" +
                "<br>Even Number";

        } else {

            output.innerHTML =
                "Number: " + number +
                "<br>Type: Positive Number" +
                "<br>Odd Number";
        }

    }

    else if (number < 0) {

        if (number % 2 === 0) {

            output.innerHTML =
                "Number: " + number +
                "<br>Type: Negative Number" +
                "<br>Even Number";

        } else {

            output.innerHTML =
                "Number: " + number +
                "<br>Type: Negative Number" +
                "<br>Odd Number";
        }

    }

    else {

        output.innerHTML =
            "Number: 0" +
            "<br>Type: Zero" +
            "<br>Even Number";
    }
}