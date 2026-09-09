let savedUsername = localStorage.getItem("username");

if (savedUsername) {
    document.getElementById("message").innerText =
        "Welcome, " + savedUsername + "!";
}

function saveUsername() {

    let username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    document.getElementById("message").innerText =
        "Welcome, " + username + "!";
}