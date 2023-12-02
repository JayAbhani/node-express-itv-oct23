// write a function to find maximum element in an array

let arr = [5, 7, 2, 9, 1, 8];

// method-1
// function maxElem(arr) {
//     let max = arr[0];
//     for(let i=1; i<arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }



// method-2
function maxElem(arr) {
    return Math.max(...arr);
}

let res = maxElem(arr);
console.log(res);