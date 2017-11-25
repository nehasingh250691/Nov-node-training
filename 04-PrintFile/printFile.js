const fs = require('fs');

//fs.readFileSync
//suspend the execution of the program utill your whole file contents are read
var fileContents = fs.readFileSync('./test.txt',{encoding:'utf8'});

console.log(fileContents);