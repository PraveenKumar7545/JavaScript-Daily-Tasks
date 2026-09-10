let products = [];

function addProduct() {

    let product = document.getElementById("product").value;

    if (product === "") {

        alert("Please enter a product name");

        return;
    }

    products.push(product);

    alert("Product added successfully");

    displayProducts();

    document.getElementById("product").value = "";
}

function displayProducts() {

    let list = document.getElementById("productList");

    list.innerHTML = "";

    products.forEach(function(product, index) {

        let li = document.createElement("li");

        li.innerText = product + " ";

        let deleteButton = document.createElement("button");

        deleteButton.innerText = "Delete";

        deleteButton.onclick = function() {
            deleteProduct(index);
        };

        li.appendChild(deleteButton);

        list.appendChild(li);
    });
}

function deleteProduct(index) {

    products.splice(index, 1);

    alert("Product deleted successfully");

    displayProducts();
}