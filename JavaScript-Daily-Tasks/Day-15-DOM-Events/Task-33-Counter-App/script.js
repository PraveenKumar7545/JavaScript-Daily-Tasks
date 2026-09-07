let count = 0;

function increase() {

    count = count + 1;
    document.getElementById("count").innerText = count;

}

function decrease() {

    count = count - 1;
    document.getElementById("count").innerText = count;
}

function reset() {

    count = 0;
    document.getElementById("count").innerText = count;

}