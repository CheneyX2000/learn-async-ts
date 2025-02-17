/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
async function sum1DArray(arr: number[][], rowIdx: number): Promise<number> {
    console.log('Sum called ... ');
    if(arr.length === 0) {
        throw new Error('Cannot sum an empty array');
    }
    return new Promise(resolve => {
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr[rowIdx].length; i++) {
                console.log(`Adding ${arr[rowIdx][i]} to sum`);
                sum += arr[rowIdx][i];
            }
            resolve(sum);
        }, 0);
    });
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

Promise.all([
    sum1DArray(array2D_1, 0), 
    sum1DArray(array2D_1, 1), 
    sum1DArray(array2D_1, 2)
    ])
    .then(sums => {
        const finalSum = sums.reduce((acc, val) => acc + val, 0);
        console.log('final sum is: ', finalSum);
    })
    .catch(error => console.log(error));