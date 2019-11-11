let {unlink} = require('./promiseFs');
/* my.unlink('./qqq/3.txt').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
}) */
let p1 = unlink('./qqq/1.txt')
let p2 = unlink('./qqq/2.txt')
Promise.all([p1,p2]).then(data=>{
    // 都删成功之后
    console.log('所有文件删除成功');
    return rmdir('./qqq')
}).then(data=>{
    console.log('删除文件夹成功')
}).catch(err=>{
    console.log('操作失败',err)
})