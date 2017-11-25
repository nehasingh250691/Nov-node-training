const fs = require('fs')

var counter = 0;
var stream = fs.createReadStream('./test.txt',{encoding:'utf8'});

//open, data,end, close, error

//end - emitted when there is no more data in file
//close - when the stream is closed

//there is a function called `close` on stream which will close the stream

stream.on('data', (chunk) =>{
    counter++;
    console.log(chunk);

    if(counter == 1)
        stream.close();
});

stream.on('end', () =>{
    console.log('---------------thats all folks!------------', counter);
});
stream.on('open', () =>{
    console.log('-------------stream is opened!--------------');
})
stream.on('close', () =>{
    console.log('-------------stream is closed!--------------');
})