const path = require('path');

console.log(path.sep)  //  Prints the platform-specific path segment separator string. '\\' or '/'

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);