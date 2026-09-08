function login(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email === "") {

        message.innerText = "Email is required";

    } else if (!email.includes("@")) {

        message.innerText = "Enter a valid email";

    } else if (password === "") {

        message.innerText = "Password is required";

    } else if (password.length < 6) {

        message.innerText =
            "Password must be at least 6 characters";

    } else {

        message.innerText = "Login Successful";
    }
}