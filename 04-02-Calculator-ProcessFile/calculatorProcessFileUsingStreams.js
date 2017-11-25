const fs = require('fs');
const calculator = require('./calculator');

var stream = fs.createReadStream('./calculate.txt');
 stream.setEncoding('utf8');

 var remainingChunk = '';
stream.on('data',(chunk) =>{
    remainingChunk += chunk;
    var fileLines = remainingChunk.split('\r\n');

    fileLines.forEach( (fileLine) =>    {
        var fileLineAttributes = fileLine.split(',');

        if(fileLineAttributes.length !== 3){
            remainingChunk = fileLineAttributes;
            return;
        }
        var op = fileLineAttributes[0],
            n1 = parseInt(fileLineAttributes[1]),
            n2 = parseInt(fileLineAttributes[2]);
        
        //console.log(fileLine, fileLineAttributes, op,n1,n2);
        console.log(calculator[op](n1,n2));
    });
}); 

stream.on('end', () => {
    console.log('----------------File processed!-------------')
})