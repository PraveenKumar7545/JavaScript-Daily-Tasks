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
    },

    {
        name: "Camera",
        brand: "Canon",
        price: 45000
    }

];


function searchProduct() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let output =
        document.getElementById("output");

    let found = false;


    for (let i = 0; i < products.length; i++) {

        if (products[i].name.toLowerCase() === searchValue) {

            output.innerHTML =
                '<div class="card">' +
                '<h2>🛍️ ' + products[i].name + '</h2>' +
                '<p>Brand: ' + products[i].brand + '</p>' +
                '<p class="price">₹' + products[i].price + '</p>' +
                '<p> Product Available</p>' +
                '</div>';

            found = true;

            break;
        }
    }


    if (found === false) {

        output.innerHTML =
            '<div class="card">' +
            '<h2>Product Not Found</h2>' +
            '<p>Try searching Laptop, Mobile, Camera...</p>' +
            '</div>';
    }
}