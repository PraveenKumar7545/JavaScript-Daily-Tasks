function findSum() {

    let sum = 0;

    for (let i = 0; i <= 50; i++) {

        if (i % 2 === 0) {
            sum = sum + i;
        }

    }

    document.getElementById("result").innerText =
        "Sum of even numbers from 0 to 50 = " + sum;
}