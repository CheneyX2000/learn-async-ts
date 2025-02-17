function doStep1(init, callback) {
    var result = init + 1;
    setTimeout(function () {
        callback(result);
    }, 0);
}
function doStep2(init, callback) {
    var result = init + 2;
    callback(result);
}
function doStep3(init, callback) {
    var result = init + 3;
    callback(result);
}
function doOperation(init) {
    doStep1(init, function (result1) {
        doStep2(result1, function (result2) {
            doStep3(result2, function (result3) {
                console.log("result: ".concat(result3));
            });
        });
    });
    console.log('do other things ...');
}
doOperation(10);
