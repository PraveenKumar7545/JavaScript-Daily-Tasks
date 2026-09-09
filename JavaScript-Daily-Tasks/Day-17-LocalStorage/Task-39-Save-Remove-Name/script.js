let savedName = localStorage.getItem("username");

if (savedName) {
    document.getElementById("message").innerText =
        "Welcome, " + savedName + "!";
}

function saveName() {

    let username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    document.getElementById("message").innerText =
        "Welcome, " + username + "!";
}

function removeName() {

    localStorage.removeItem("username");

    document.getElementById("message").innerText =
        "Username Removed";
}