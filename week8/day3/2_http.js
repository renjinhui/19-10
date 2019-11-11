let http = require('http');
let url = require('url');
let {readFile} = require('./promiseFs');

let server = http.createServer((req,res)=>{
    // console.log(req)
    // req.headers 请求头
    // cors跨域
    /* res.setHeader('Access-Control-Allow-Origin',"https://www.baidu.com");
    res.setHeader('Access-Control-Allow-Credentials',' true')
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.setHeader('Set-Cookie','qqq=123456'); */
    // 跨域种植cookie在application中没有体现
    let str = '';
    req.on('data',function(chunk){
        // 正在接受请求体 
        str += chunk;
    })
    req.on('end',function(){
        // 接收请求体完成
        console.log(str)
    })
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
    })
    res.end('999')
});

let port = 8000;
let init = true;
function listen(){
    let cb = null;
    if(init){
        init = false;
        cb=()=>{
            console.log('服务起于'+port)
        }
    }
    server.listen(port,cb);
}
listen();
server.on('error',(e)=>{
    if(e.code === 'EADDRINUSE'){
        // 上个端口被占用了
        port++;
        listen();
    }
})
/* 
    http  怎么起服务？
          怎么获取前端数据(路径 参数)
          怎么设置响应头(cors跨域的设置)
          端口占用的处理
          后端的响应 res.end(给前端的信息)
*/

