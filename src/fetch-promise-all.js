var url1 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
var url2 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found";
var url3 = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var fetchPromise_1 = fetch(url1);
var fetchPromise_2 = fetch(url2);
var fetchPromise_3 = fetch(url3);
Promise.all([fetchPromise_1, fetchPromise_2, fetchPromise_3])
    .then(function (responses) {
    for (var _i = 0, responses_1 = responses; _i < responses_1.length; _i++) {
        var response = responses_1[_i];
        console.log("".concat(response.url, ": ").concat(response.status));
    }
})
    .catch(function (error) {
    console.error("Failed to fetch: ".concat(error));
});
