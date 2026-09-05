let products = [

    {
        name: "Headphones",
        price: 2000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        name: "Smart Watch",
        price: 3500,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        name: "Keyboard",
        price: 2500,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },

    {
        name: "Mouse",
        price: 1200,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },

    {
        name: "Laptop",
        price: 55000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    }

];


function showBudgetProducts() {

    let output =
        document.getElementById("output");


    let budgetProducts =
        products.filter(function(product) {

            return product.price <= 10000;

        });


    output.innerHTML = "";


    for (let i = 0; i < budgetProducts.length; i++) {

        output.innerHTML +=

            '<div class="card">' +

                '<img src="' +
                budgetProducts[i].image +
                '" alt="' +
                budgetProducts[i].name +
                '">' +

                '<div class="content">' +

                    '<h2>' +
                    budgetProducts[i].name +
                    '</h2>' +

                    '<p class="price">' +
                    '₹' +
                    budgetProducts[i].price +
                    '</p>' +

                    '<span class="badge">' +
                    'Budget Friendly' +
                    '</span>' +

                '</div>' +

            '</div>';
    }
}