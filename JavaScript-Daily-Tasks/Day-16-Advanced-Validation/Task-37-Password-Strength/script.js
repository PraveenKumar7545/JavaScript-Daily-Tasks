function checkStrength() {

    let password = document.getElementById("password").value;
    let strength = document.getElementById("strength");

    if (password.length < 6) {

        strength.innerText = "Weak";

    } else if (password.length < 10) {

        strength.innerText = "Medium";

    } else {

        strength.innerText = "Strong";
    }
}