const fs = require('fs');

// Create a Readable Stream
const readableStream = fs.createReadStream('example.txt');

// Listen to data events
readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

// Listen to the end event
readableStream.on('end', () => {
  console.log('Finished reading data.');
});

// Handle errors
readableStream.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

// Pipe the Readable Stream to the console
const writableStream = process.stdout;
readableStream.pipe(writableStream);
