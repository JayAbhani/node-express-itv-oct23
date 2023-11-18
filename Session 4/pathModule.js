const path = require('path');

const myPath = 'C:/MyFiles/ITV/index.html';

const fileName = path.basename(myPath);
// console.log(fileName);

const dirName = path.dirname(myPath);
// console.log(dirName);

const extName = path.extname(myPath);
// console.log(extName);

const parsedPath = path.parse(myPath);
// console.log(parsedPath);

// console.log(path.sep);

console.log(path.join('folder1', 'folder2', 'folder3'));

console.log(path.resolve('folder1', 'folder2', 'folder3'));



