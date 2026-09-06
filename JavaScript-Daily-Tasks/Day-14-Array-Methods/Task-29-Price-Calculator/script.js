function calculatePrice() {

    let input = document.getElementById("priceInput").value;

    let prices = input.split(",").map(Number);

    // Display original prices
    document.getElementById("originalPrices").innerText =
        prices.join(", ");


    // Calculate 10% discount
    let discountedPrices = prices.map(function(price) {

        return price - (price * 10 / 100);

    });

    document.getElementById("discountedPrices").innerText =
        discountedPrices.join(", ");


    // Calculate original total
    let originalTotal = prices.reduce(function(total, price) {

        return total + price;

    }, 0);

    document.getElementById("originalTotal").innerText =
        originalTotal;


    // Calculate final price
    let finalPrice = discountedPrices.reduce(function(total, price) {

        return total + price;

    }, 0);

    // Calculate discount amount
    let discountAmount = originalTotal - finalPrice;

    document.getElementById("discountAmount").innerText =
        discountAmount.toFixed(2);


    document.getElementById("finalPrice").innerText =
        finalPrice.toFixed(2);
}