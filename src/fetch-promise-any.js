var url11 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
var url21 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found";
var url31 = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var fetchPromise11 = fetch(url11);
var fetchPromise21 = fetch(url21);
var fetchPromise31 = fetch(url31);
Promise.any([fetchPromise11, fetchPromise21, fetchPromise31])
    .then(function (response) {
    console.log("".concat(response.url, ": ").concat(response.status));
})
    .catch(function (error) {
    console.error("Failed to fetch: ".concat(error));
});
