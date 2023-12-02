// write a function to concatenate two arrays.

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let res = concatArrays(arr1, arr2);
console.log(res);