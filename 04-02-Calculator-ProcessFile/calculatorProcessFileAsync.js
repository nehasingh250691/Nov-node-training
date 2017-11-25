const fs = require('fs');

const calculator = require('./calculator');

fs.readFile('./calculate.txt',{encoding:'utf8'}, (error,fileContents) =>{
    if(!error){
        var fileLines = fileContents.split('\r\n');
        fileLines.forEach( (fileLine) =>    {
            var fileLineAttributes = fileLine.split(','),
                op = fileLineAttributes[0],
                n1 = parseInt(fileLineAttributes[1]),
                n2 = parseInt(fileLineAttributes[2]);
            //console.log(fileLine, fileLineAttributes, op,n1,n2)
            console.log(calculator[op](n1,n2));
        });
    }
});

