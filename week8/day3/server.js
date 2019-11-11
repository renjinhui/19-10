let http = require('http');
let url = require('url');
let {readFile} = require('./promiseFs');
http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    switch (pathname) {
        case '/':
            readFile('./static/index.html').then(data=>{
                res.end(data)
            }).catch(err=>{
                res.statusCode = 500;
            })
            break;
        case '/favicon.ico':
            readFile('./static/favicon.ico').then(data=>{
                res.end(data)
            }).catch(err=>{
                res.end('666')
            })
            break;
        case '/1.js':
            readFile('./static/1.js').then(data=>{
                res.end(data)
            }).catch(err=>{
                res.end('666')
            })
            break;   
        case '/1.css':
            readFile('./static/1.css').then(data=>{
                res.end(data)
            }).catch(err=>{
                res.end('666')
            })
            break;  
        case '/1.jpg':
            readFile('./static/1.jpg').then(data=>{
                res.end(data)
            }).catch(err=>{
                res.end('666')
            })
            break;            
        default:
            res.end('12345678')
            break;
    }
    // res.end('666')
}).listen(3000,function(){
    console.log('服务起于 3000端口')
})