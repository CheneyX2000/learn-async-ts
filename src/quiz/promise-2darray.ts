/**
 * calculate the sum of all numbers in the 2D array.
 * @param arr 2D array of numbers
 * @returns the sum of all numbers in the 2D array
 */
function calculateSum(arr: number[][]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`Adding ${arr[i][j]} to sum`);
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
function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            return reject('Cannot sum an empty array');
        }
        const sum = calculateSum(arr);
        resolve(sum);
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D)
    .then(total => console.log('sumPromise1:', total))
    .catch(error => console.error('Error:', error));

const sumPromise2 = sum2DArray([])
    .then(total => console.log('sumPromise2:', total))
    .catch(error => console.log('Error', error));
