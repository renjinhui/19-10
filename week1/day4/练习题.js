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

function f(a) {
    console.log(a, b, c);
    var b = a = c = 100;
    console.log(a, b, c) 
}
f(10, 20);
console.log(a, b, c);

//-------------------------------------

a(); 
var a = c = function () {
    console.log(2)
};
a(); 
function a() {
    console.log(1)
};
a(); 

//---------------------

var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
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
    b(); 
    c(); 
    var b = c = function a() {
        console.log(3)
    };

    function b() {
        console.log(4)
    }
    b(); 
})(a);
c();

//---------------------------
var n = 5;

function a(n) {
    n++;
    n = 10; 
    b();

    function b() {
        n++;
        alert(n);
    };
}
a();
alert(n);

//---------------------------------

var n = 10;

function fn() {
    var n = 20; //21  22 23
    function f() {
        n++;
        console.log(n)
    };
    f();
    return f
}
var f = fn();
f();
f();
console.log(n);

//======================

var i = 1;

function fn(i) {
    return function (n) {
        console.log(n + (++i))
    }
}
var f = fn(2);
f(3);
fn(5)(6)
fn(3)(2)
f(4);

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
let f = fn(2);
f(3);
fn(2)(3);
f(4);
f(5);

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
console.log(x + y);

//-------------------------------------
var x = 1;
var obj = {x: 2};
obj.fn = (function (x) {
    this.x *= x++;
    return function (y) {
        x += y;
        this.x *= ++x;
        console.log(x);
    }
})(obj.x);
var fn = obj.fn;
obj.fn(2);
fn(1);
console.log(obj.x, x);

//-------------------------------------
var x=2;
var y={
    x:3,
    z:(function(x){
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
m(4);
y.z(5);
console.log(x, y.x);
