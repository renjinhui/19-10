async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log('async2');
}
console.log("script start");
setTimeout(function () {
  console.log("settimeout");
},20);
async1()
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
setImmediate(() => {
  console.log("setImmediate")
})
process.nextTick(() => {
  //全局微任务  优先于promise的微任务执行
  console.log("process")
})
console.log('script end');

