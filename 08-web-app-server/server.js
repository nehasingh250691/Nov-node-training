const   http = require('http'),
        fs = require('fs'),
        path = require('path'),
        url = require('url'),
        querystring = require('querystring');
const calculator = require('./calculator');


var staticExtns = ['.html','.css','.js','.json','.jpg','.png'];

function isStaticResource(resourceName){
    return staticExtns.indexOf(path.extname(resourceName)) !== -1;
}

var server = http.createServer((req,res)=>{
    var urlObj = url.parse(req.url === '/' ? '/index.html': req.url);
    var resourceName = urlObj.pathname;

    if(isStaticResource(resourceName)){
        var resource = path.join(__dirname,resourceName);
        if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
        fs.createReadStream(resource).pipe(res);
    } else if(resourceName === '/calculator' && req.method === 'GET'){
        var calculatorData = querystring.parse(urlObj.query);
        //console.log(calculatorData);
        var op = calculatorData.op,
            n1 = parseInt(calculatorData.n1),
            n2 = parseInt(calculatorData.n2);
        res.write((calculator[op](n1,n2)).toString());
        res.end();
    }else if(resourceName === '/calculator' && req.method === 'POST'){
        var rawData = '';
        req.on('data', (chunk) =>{
            rawData += chunk;
        });
        req.on('end', () => {
            var calculatorData = querystring.parse(rawData);
            console.log(calculatorData);
            var op = calculatorData.op,
            n1 = parseInt(calculatorData.n1),
            n2 = parseInt(calculatorData.n2);
            res.write((calculator[op](n1,n2)).toString());
            res.end();
        });       
    }
    else{
        res.statusCode = 404;
        res.end();
    }    
});

server.listen(8080, function(){
    console.log('Server started on 8080!')
})