// Importing Bluebird
const Promise = require('bluebird');

// Function that returns a Bluebird promise with cancellation
function doSomethingAsyncWithCancellation() {
  const promise = new Promise((resolve, reject, onCancel) => {
    // Simulating an asynchronous task
    const timeoutId = setTimeout(() => {
      const success = true; // Change to false to simulate failure
      if (success) {
        resolve('Task completed successfully');
      } else {
        reject('Task failed');
      }
    }, 1000); // Simulating a delay of 1 second

    // Registering a cancellation callback
    onCancel(() => {
      clearTimeout(timeoutId);
      reject(new Promise.CancellationError('Task cancelled'));
    });
  });

  return promise;
}

// Creating a cancellation token
const cancellationToken = new Promise.CancellationError('Operation cancelled');

// Using the Bluebird promise with cancellation
const asyncOperation = doSomethingAsyncWithCancellation();

// Initiating cancellation after 500 milliseconds
setTimeout(() => {
  asyncOperation.cancel(cancellationToken);
}, 500);

// Handling the promise
asyncOperation
  .then((result) => {
    console.log(result); // Output if the promise is resolved
  })
  .catch(Promise.CancellationError, (error) => {
    console.error(error.message); // Output if the promise is cancelled
  })
  .catch((error) => {
    console.error(error); // Output if the promise is rejected for other reasons
  });
