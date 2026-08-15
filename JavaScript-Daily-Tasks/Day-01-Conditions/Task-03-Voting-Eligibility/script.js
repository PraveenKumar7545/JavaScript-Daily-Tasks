function checkAge() {

    let age = document.getElementById("ageInput").value;

    if (age < 18) {
        document.getElementById("result").innerHTML = "Not Eligible";
    }
    else if (age <= 60) {
        document.getElementById("result").innerHTML = "Eligible";
    }
    else {
        document.getElementById("result").innerHTML = "Senior Citizen";
    }

}