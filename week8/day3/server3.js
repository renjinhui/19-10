let http = require('http');
let url = require('url');
let {readFile,writeFile} = require('./promiseFs');

let server = http.createServer((req,res)=>{
    console.log(req.method)
    let {pathname,query} = url.parse(req.url,true);
    let method = req.method;
    res.setHeader('Access-Control-Allow-Origin', "*");// 让后端支持跨域
    
    res.writeHead(200,{
        'Access-Control-Allow-Credentials':true,
        "Access-Control-Allow-Headers": "x-requested-with,content-type,Cache-Control,Pragma,Date,x-timestamp"
    })
    if(req.method === 'OPTIONS'){
        res.end('6666')
    }
    // list get
    // add  post
    switch (pathname) {
        case '/list':
            if(method.toLowerCase() != 'get'){
                res.statusCode = 405;
                res.statusMessage = 'method not allowed';
                res.end('')
            }else{
                readFile('./json/data.json').then(data=>{
                    res.end(data)
                }).catch(err=>{
                    res.statusCode = 500;
                    res.end('')
                })
            }
            break;
        case '/add':
            if(method.toLowerCase() != 'post'){
                res.statusCode = 405;
                res.statusMessage = 'method not allowed';
                res.end('')
            }else{
                // 获取前端给的请求体
                let str = ''
                req.on('data',function(chunk){
                    str += chunk;
                });
                req.on('end',function(){
                    console.log(str)
                    readFile('./json/data.json').then(data=>{
                        console.log('data',data.toString())
                        let obj = JSON.parse(data.toString());
                        obj.data.push(...JSON.parse(str).a);
                        // obj是增加完数据之后的 对象
                        return writeFile('./json/data.json',JSON.stringify(obj))
                    }).then(data=>{
                        res.end(JSON.stringify({code:0,data:'success'}))
                    }).catch(err=>{
                        res.statusCode = 500;
                        res.statusMessage = 'bad systerm';
                        res.end('')
                    })
                    // res.end('66666')
                });
            }
            break;
        default:
            break;
    }
})
let port = 8000;
function listen(){
    let cb = null;
    if(port == 8000){
        cb = ()=>{
            console.log(`服务起于 ${port} 端口`)
        }
    }
    server.listen(port,cb)
}
server.on('error',function(e){
    if(e.code == 'EADDRINUSE'){
        port++;
        listen();
    }
})
listen()