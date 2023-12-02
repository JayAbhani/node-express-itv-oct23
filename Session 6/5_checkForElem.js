// write a function to check if an element exists in an array.

let arr = [4, 6, 2, 8, 7, 6, 1];
let x = 8;

// console.log(arr.includes(x));

for(let i=0; i<arr.length; i++) {
    if(arr[i] == x) {
        console.log(true);
        break;
    }
}

