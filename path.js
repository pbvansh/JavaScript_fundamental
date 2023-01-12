const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.isAbsolute(__filename)); 
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute('./child_process'));

console.log(path.join('path1','path2','path3','index.js'));
console.log(path.join('/path1','path2','/path3','index.js'))
console.log(path.join('/path1','path2','../path3','index.js'));
console.log(path.join('/path1','path2','../path3','../index.js'));
console.log(path.join(__dirname,'index.js'));

console.log(path.resolve('path1','path2','path3','index.js'));
console.log(path.resolve('/path1','path2','//path3','index.js'))
console.log(path.resolve('/path1','path2','../path3','index.js'));
