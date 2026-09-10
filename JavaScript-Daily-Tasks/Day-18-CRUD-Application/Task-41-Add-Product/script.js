let products = [];

function addProduct() {

    let product = document.getElementById("product").value;

    if (product === "") {
        return;
    }

    products.push(product);

    displayProducts();

    document.getElementById("product").value = "";
}

function displayProducts() {

    let list = document.getElementById("productList");

    list.innerHTML = "";

    products.forEach(function(product) {

        let li = document.createElement("li");

        li.innerText = product;

        list.appendChild(li);
    });
}