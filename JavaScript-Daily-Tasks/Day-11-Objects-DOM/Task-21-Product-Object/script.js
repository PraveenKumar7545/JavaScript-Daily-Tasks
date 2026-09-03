// Create Product Object

let product = {
    name: "Laptop",
    brand: "Dell",
    price: 55000,
    stock: 10
};


// Function

function displayProduct() {

    let output = document.getElementById("output");

    output.innerHTML =
        "Product: " + product.name +
        "<br>Brand: " + product.brand +
        "<br>Price: ₹" + product.price +
        "<br>Available Stock: " + product.stock;
}