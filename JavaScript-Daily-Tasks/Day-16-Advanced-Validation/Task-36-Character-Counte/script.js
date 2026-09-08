function countCharacters() {

    let text = document.getElementById("text").value;

    let count = text.length;

    document.getElementById("count").innerText = count;
}