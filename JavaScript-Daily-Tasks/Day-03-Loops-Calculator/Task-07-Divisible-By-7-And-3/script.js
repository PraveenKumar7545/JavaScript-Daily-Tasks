let result = "";

for (let i = 1; i <= 100; i++) {

    if (i % 7 === 0 && i % 3 === 0) {
        result = result + i + " ";
    }

}

document.getElementById("result").innerText = result;