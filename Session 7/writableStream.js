const fs = require('fs');

// Create a Writable Stream
const writableStream = fs.createWriteStream('output.txt');

// Write data to the stream
writableStream.write('Hello, ');
writableStream.write('Node.js!');

// Handle the finish event
writableStream.on('finish', () => {
  console.log('Data has been written to the file.');
});

// Handle errors
writableStream.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

// End the stream (this triggers the finish event)
writableStream.end();
