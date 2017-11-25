const http = require('http');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const calculator = require('./calculator');


var server = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url === '/' ? './index.html': req.url);
    
    if(urlObj.pathname === '/calculator'){
        var queryString = querystring.parse(urlObj.query);
        //console.log(queryString);
        var op = queryString.op,
            n1 = parseInt(queryString.num1),
            n2 = parseInt(queryString.num2);
        res.write((calculator[op](n1,n2)).toString());
        res.end();
    }
    else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8080, function(){
    console.log('Server started on 8080!')
})