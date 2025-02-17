/**
 * calculate the sum of all numbers in the 2D array.
 * @param arr 2D array of numbers
 * @returns the sum of all numbers in the 2D array
 */
function calculateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log("Adding ".concat(arr[i][j], " to sum"));
            sum += arr[i][j];
        }
    }
    console.log('returning from sum');
    return sum;
}
/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr) {
    return new Promise(function (resolve, reject) {
        console.log('Sum called ... ');
        if (arr.length === 0) {
            return reject('Cannot sum an empty array');
        }
        var sum = calculateSum(arr);
        resolve(sum);
    });
}
// Example usage:
var array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var sumPromise1 = sum2DArray(array2D)
    .then(function (total) { return console.log('sumPromise1:', total); })
    .catch(function (error) { return console.error('Error:', error); });
var sumPromise2 = sum2DArray([])
    .then(function (total) { return console.log('sumPromise2:', total); })
    .catch(function (error) { return console.log('Error', error); });
