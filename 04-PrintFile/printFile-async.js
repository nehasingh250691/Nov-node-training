const fs = require('fs');

//fs.readFileSync
//fs.readFile
//fs.createReadStream

// error first callback pattern
// memory usage is high - read and store the chunks in memory - and call the callback function when whole file contents are read
fs.readFile('./test.small.txt',{encoding:'utf8'}, function(err,contents){
    if(!err){
        console.log(contents);
        console.log('--------------Thats all folks!---------');
    }
});

console.log('--------------Will be printed before the file contents are read---------');