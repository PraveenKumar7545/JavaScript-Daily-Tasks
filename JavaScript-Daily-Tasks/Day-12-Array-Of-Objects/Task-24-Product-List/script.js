let products = [

    {
        name: "Laptop",
        brand: "Dell",
        price: 55000
    },

    {
        name: "Mobile",
        brand: "Samsung",
        price: 25000
    },

    {
        name: "Headphones",
        brand: "Boat",
        price: 2000
    },

    {
        name: "Smart Watch",
        brand: "Noise",
        price: 3500
    }

];


function displayProducts() {

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        output.innerHTML +=
            "<div>" +
            "<h3>" + products[i].name + "</h3>" +
            "<p>Brand: " + products[i].brand + "</p>" +
            "<p>Price: ₹" + products[i].price + "</p>" +
            "</div>";
    }
}