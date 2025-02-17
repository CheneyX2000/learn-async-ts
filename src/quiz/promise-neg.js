/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function findNeg1DArray(arr, rowIdx) {
    return new Promise(function (resolve, reject) {
        console.log('negative search called ... ');
        if (arr.length === 0) {
            return reject('Cannot find negative number in an empty array');
        }
        setTimeout(function () {
            var found = false;
            for (var i = 0; i < arr[rowIdx].length; i++) {
                if (arr[rowIdx][i] < 0) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                reject('Cannot find negative number in this array');
            }
            resolve(arr[rowIdx]);
        }, 0);
        console.log('returning from the negative number');
    });
}
var array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
Promise.any([
    findNeg1DArray(array2D_3, 0),
    findNeg1DArray(array2D_3, 1),
    findNeg1DArray(array2D_3, 2),
]).then(function (negativeArray) { return console.log('Found an array containing negative number: ', negativeArray); });
