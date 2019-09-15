console.log(a);
var a = 12;

function fn() {
    console.log(a);
    a = 13;
}
fn();

//-------------------------------------

console.log(a, b, c); 
var a = 10,
    b = 20,
    c = 30;

function f(a) { // a = 10; b undefined
    console.log(a, b, c);
    var b = a = c = 100;// a b = 100 ; 上级的c=100
    console.log(a, b, c) // 100 100 100
}
f(10, 20);
console.log(a, b, c);// 10 20 100

//-------------------------------------

a(); // 1
var a = c = function () {
    console.log(2)
};
a(); // 2
function a() {
    console.log(1)
};
a(); // 2

//---------------------

var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);//10
}
bar();

//-------------------------------------

function a() {
    console.log(1)
};
function c() {
    console.log(2)
}
(function (b) {
    // a 是全局的a； b是私有的b ; 两者是同一个函数地址；
    // 形参赋值 确定下来 b 是 1函数； 变量提升 确定下来 b换成了 4 函数
    b(); // 4
    c(); // 2
    var b = c = function a() {
        // 把 全局的 c  和 私有的 b换成了 3  函数
        console.log(3)
    };

    function b() {
        console.log(4)
    }
    b(); // 3
})(a);
c(); // 3

//---------------------------
var n = 5;

function a(n) {
    n++;
    n = 10; 
    b();

    function b() {
        n++;
        alert(n);//11
    };
}
a();
alert(n);//5

//---------------------------------

var n = 10;

function fn() {
    var n = 20;// 21 22  23
    function f() {
        n++;
        console.log(n)// 21 22 23
    };
    f();
    return f
}
var f = fn();
f();
f();
console.log(n); // 10

//======================

var i = 1;
function fn(i) {
    return function (n) {
        console.log(n + (++i))
    }
}
var f = fn(2);// 私有的 i: 2 3 4
f(3);//3 + 3 = 6
fn(5)(6)// 私有的i 是 5->6   6 + 6 = 12
fn(3)(2)// 私有的i 是 3->4   2 + 4 = 6
f(4);// 4 + 4 = 8

//--------------------

let i = 1;
let fn = function (n) {
    i *= 2;
    return function (m) {
        n++; 
        i += n + m;
        console.log(i);
    }
};
// 全局的 i： 1  2  8  16 22  30  40
let f = fn(2);// 私有的n 是 2  3  4  5
f(3);// 私有的m :3
fn(2)(3);// 私有的n :2 3 ;---> m=3 
f(4);// 私有的m是4
f(5);// 私有的m是5

//-----------------------------this
var x = 1,
    y = 2;
function fn(x) {
    this.x *= (++x);
    fn = function (y) {
        this.y *= (--y);
        console.log(x + y);
    }
    console.log(x + y);
    return fn;
}
fn(3)(4);
fn(5);
console.log(x + y);

//-------------------------------------
var x = 1; // 2  16
var obj = {x: 2}; // 12
obj.fn = (function (x) {
    // 私有的 x 是 2 3 5 6  7  8
    this.x *= x++;// 
    return function (y) {
        x += y;
        this.x *= ++x;
        console.log(x);
    }
})(obj.x);
var fn = obj.fn;
obj.fn(2);// this 是  obj // y=2    //输出6
fn(1);//this 是  window // y = 1   //输出8  
console.log(obj.x, x); // 12  16
//-------------------------------------
var x=2; // 4  16
var y={
    x:3, // 15
    z:(function(x){ // x:2  4   7  10
        this.x*=x;
        x+=2;
        return function(n){
            this.x*=n;
            x+=3;
            console.log(x); 
        }
    })(x)
};
var m=y.z;
m(4);// n :4;this --》 window   输出7
y.z(5); // n:5  ； this --> y;   输出10
console.log(x, y.x); // 16   15
