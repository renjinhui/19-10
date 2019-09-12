//this
//1、
var num = 1;
var obj = {
    num: 10,
    fn: (function () {
        this.num *= 3;
        return function () {
            num += 2;
            this.num++;
        }
    })()
};
var f = obj.fn;
f();
obj.fn();
console.log(num, obj.num);
//2
var name = '珠峰';
var age = 9;
age = (function (name, age) {
    name = '珠峰';
    age = age || this.age;
    this.age = arguments[0];
    console.log(name, age)
    return this.age;
})(name, age);
console.log(name, age);
//3
var obj = {
    name: '珠峰',
    age: 9
};
(function (obj) {
    obj.name = '中国';
    obj = {};
    obj.age = 5000;
    console.log(obj.age); // 5000
})(obj);
console.log(obj.name);// 中国

var a = {
    x:1
}
var b = a;
a.y = a = {
    qqq:123
}
console.log(a.x,b.x)
//4
var num = 1;
var obj = {
    num: 2
};
obj.fn = (function (num) {
    this.num = num * 2;
    num++;
    return function (n) {
        this.num += n;
        num++;
        console.log(num)
    }
})(obj.num)
var fn = obj.fn;
fn(10);
obj.fn(20);
console.log(num, obj.num);