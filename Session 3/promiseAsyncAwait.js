// task 1               1s
// task 2               1s
// task 3               1s
// task 4 (async)       10s     processing
// task 5               1s           
// task 6               1s


// js is single-threaded synchronous language.


// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello! inside settimeout");
// }, 2000)

// console.log("three");



// asynchronous operations
// tasks that takes some time and don't block the main program flow.
// they can run in background without stopping the rest of the code.

// promises
// to manage the complexities of handling asynchronous operations in structured way

// a promise is an object representing the eventual completion or failure of an asynchronous operation. it provides a way to handle asynchronous tasks in a more structured manner.

// a promise has three states: pending, fulfilled or rejected.


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "async data fetched!";
            resolve(data);
            // reject("error occured");
        }, 2000);
    })
}

async function fetchAndDisplayData() {
    const result = await fetchData();
    console.log(result);
}
fetchAndDisplayData();

// fetchData()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });