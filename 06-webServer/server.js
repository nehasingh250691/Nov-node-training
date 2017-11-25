const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');


var server = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url === '/' ? '/index.html': req.url);
    var filepath = path.join(__dirname,urlObj.pathname);

    if(!fs.existsSync(filepath)){
        res.statusCode = 404;
        res.end();
        return;
    }
    var stream = fs.createReadStream(filepath,{encoding:'utf8'});

    // stream.on('data',function(chunk){
    //     res.write(chunk);
    // });
    // stream.on('end', () =>{
    //     res.end();
    // });
    
    //if we are just passing the data from one stream to another and not doing anything with data just add the 2 streams using pipe
    stream.pipe(res);
});

server.listen(8080, function(){
    console.log('Server started on 8080!')
})