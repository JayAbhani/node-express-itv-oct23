const fs = require('fs');


// 1. fs.mkdir(path, cb)
// fs.mkdir('./myFolder', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Folder created successfully');
//     }
// })


// 2. fs.writeFile(path, data, cb)
// fs.writeFile('./myFolder/myFile.txt', 'ITVEDANT Welcomes You!', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File created successfully');
//     }
// });


// fs.writeFile('./myFolder/myFile.txt', 'NodeJS Tutorial', {flag: 'a'}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File created successfully');
//     }
// });



// 3. fs.appendFile(path, data, cb)


// 4. fs.readFile(path, encoding, cb)
// fs.readFile('./myFolder/myFile.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })


// 5. fs.readdir(path, cb)
// fs.readdir('./myFolder', (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Directory read successfully');
//         console.log(files);
//     }
// });


// 6. fs.rename(oldPath, newPath, cb)
// fs.rename('./myFolder/myFile.txt', './myFolder/myNewFile.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Directory renamed successfully');
//     }
// })


// 7. fs.unlink(path, cb)
// fs.unlink('./myFolder/myNewFile.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File deleted successfully');
//     }
// });

