// write a function to remove duplicates from an array

let arr = [5, 2, 5, 4, 2, 2, 7, 8, 2];

function removeDuplicates(arr) {
    let uniqueArr = [];

    for(let i=0; i<arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

let res = removeDuplicates(arr);
console.log(res);