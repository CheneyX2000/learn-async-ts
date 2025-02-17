// Call to fetch() returns a promise
var fetchPromise4 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
/**
 * The promise is resolved when the response is received
 * The json from the response is retrieved asynchronously
 * Once the json is received, the promise is resolved
 * The resolved promise is handled by logging the product names
 * This is an illustration of refactoring callback hell by chaining promises
 */
fetchPromise4
    .then(function (response) { return response.json(); })
    .then(function (products) {
    products.forEach(function (product) {
        console.log(product.name);
    });
});
console.log('Chaining promises ... ');
