/** Call to fetch() returns a promise
which is resolved when the response is received
**/
var fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
/**
 * The promise is resolved when the response is received
 * The json from the response is retrieved asynchronously
 * Once the json is received, the promise is resolved
 * The resolved promise is handled by logging the product names
 * This is an illustration of callback hell
 */
fetchPromise2.then(function (response) {
    var jsonPromise = response.json();
    jsonPromise.then(function (products) {
        products.forEach(function (product) {
            console.log(product.name);
        });
    });
});
// Logging a message to indicate fetching has started
console.log('Fetching products ... ');
