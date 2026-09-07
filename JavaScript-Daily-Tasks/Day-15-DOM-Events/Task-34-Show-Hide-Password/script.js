function showHidePassword() {

    let password = document.getElementById("password");
    let button = document.getElementById("toggleButton");

    if (password.type === "password") {

        password.type = "text";
        button.innerText = "Hide";

    } else {

        password.type = "password";
        button.innerText = "Show";

    }
}