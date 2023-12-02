// write a function to filter out the odd numbers from an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function filterOdds(arr) {
    return arr.filter(num => num%2 != 0);
}

let res = filterOdds(arr);
console.log(res);