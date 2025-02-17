// Call to fetch() throws an error due to a bad URL
var fetchPromise3 = fetch("https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json");
/**
 * The promise is resolved when the response is received
 * The json from the response is retrieved asynchronously
 * Once the json is received, the promise is resolved
 * The resolved promise is handled by logging the product names
 * If the response is not ok, an error is thrown
 * This is an illustration of error handling
 */
fetchPromise3
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error("Bad Response : ".concat(response.status));
})
    .then(function (products) {
    products.forEach(function (product) {
        console.log(product.name);
    });
})
    .catch(function (error) {
    console.error("Failed to get products: ".concat(error));
});
console.log('Chaining promises ... ');
