// write a function to find the sum of all elements in an array.

let arr = [3, 76, 1, 45, 23, 9];

// method-1
// function arrSum(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         sum = sum + arr[i];     
//     }
//     return sum;
// }

// let res = arrSum(arr);
// console.log(res);


// method-2
function arrSum(arr) {
    return arr.reduce((acc, current) => acc+current, 0);
}

let res = arrSum(arr);
console.log(res);