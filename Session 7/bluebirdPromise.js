// Importing Bluebird
const Promise = require("bluebird");

// Function that returns a Bluebird promise
function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous task
    setTimeout(() => {
      const success = false; // Change to false to simulate failure
      if (success) {
        resolve("Task completed successfully");
      } else {
        reject("Task failed");
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

// Using the Bluebird promise
doSomethingAsync()
  .then((result) => {
    console.log(result); // Output if the promise is resolved
  })
  .catch((error) => {
    console.error(error); // Output if the promise is rejected
  });
