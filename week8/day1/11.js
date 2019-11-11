// let url = require('url');
// //=>url.parse(str,true)用来解析URL中每一部分信息的，第二个参数传TRUE，自动会把问号参数解析成键值对的方式，存储在query属性中
// // query：问号传递参数的键值对
// // pathname：请求路径名称

// let str = 'http://www.zhufengpeixun.cn:80/stu/index.html?lx=1&from=weixin#teacher';
// console.log(url.parse(str, true));
let fs = require('fs');
/* fs.readdir('./', (err, data) => {
    console.log('data', data)
})
var res = fs.readdirSync('./');
console.log('res', res) */

/* fs.readFile('./data.json','utf-8', (err, data) => {
    console.log(data)
    console.log(JSON.parse(data.toString()))
}) */
/* fs.readFile('./1.jpg',null,(err,data)=>{
    console.log(data.toString())
}) */
let path = require('path');
// console.log(__dirname,__filename,exports,module,require)
// console.log(path.resolve('./3_git'))
// fs.mkdir('./qqq',null,(err)=>{
//     console.log(data)
// })
// fs.rmdir('./qqq',null,(err)=>{
//     console.log(666,err)
// })
// fs.writeFile('./AA.txt','你好呀','utf-8',(err)=>{
//     console.log(111,err)
// })
// fs.appendFile('./AA.txt',' 我很好','utf-8',(err)=>{
//     console.log(222,err)
// })
// fs.copyFile('./AA.txt','./BB.txt',(err)=>{
//     console.log(333,err)
// })
fs.unlink('./BB.txt',(err)=>{
    console.log(555,err)
})
