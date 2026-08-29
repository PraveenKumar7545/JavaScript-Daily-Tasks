const products = ["Apple", "Samsung", "Oppo", "Vivo"];

function searchProduct() {

    const searchValue =
        document.getElementById("searchInput").value.toLowerCase();

    const output =
        document.getElementById("output");

    let result = "";

    for (let product of products) {

        if (product.toLowerCase().includes(searchValue)) {

            result += product + "<br>";

        }

    }

    if (result === "") {

        output.innerHTML = "No product found";

    } else {

        output.innerHTML = result;

    }
}