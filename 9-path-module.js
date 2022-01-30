const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);

// file name of a path
const base = path.basename(filePath);
console.log(base);

// absolute path of a given path (first method)
const absolute1 = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// absolute path of a given path (second method)
const absolute2 = path.resolve(__dirname, filePath)
console.log(absolute);