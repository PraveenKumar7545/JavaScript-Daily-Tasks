let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function lightTheme() {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    localStorage.setItem("theme", "light");
}

function darkTheme() {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    localStorage.setItem("theme", "dark");
}