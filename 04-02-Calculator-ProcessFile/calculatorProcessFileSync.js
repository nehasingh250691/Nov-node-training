const fs = require('fs');

const calculator = require('./calculator');

var fileContents = fs.readFileSync('./calculate.txt',{encoding:'utf8'});

var fileLines = fileContents.split('\r\n');
fileLines.forEach( (fileLine) =>    {
    var fileLineAttributes = fileLine.split(','),
        op = fileLineAttributes[0],
        n1 = parseInt(fileLineAttributes[1]),
        n2 = parseInt(fileLineAttributes[2]);
    //console.log(fileLine, fileLineAttributes, op,n1,n2)
    console.log(calculator[op](n1,n2));
});