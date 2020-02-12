// 第一题
function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn();
var f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();
f1.sum();
Fn.prototype.sum();

// 第二题
function Foo() {
    getName = function () {console.log(1);};
    return this;
}
Foo.getName = function () {console.log(2);}; 
Foo.prototype.getName = function () {console.log(3);};
var getName = function () {console.log(4);};
function getName() {console.log(5);}

Foo.getName();
getName();
Foo().getName(); 
getName();
var a = new Foo.getName(); // 
var b = new Foo().getName();
var c = new new Foo().getName();
console.log(a,b,c);

// 第三题
function Person() {
    this.name = 'zhufeng'
};
Person.prototype.getName = function () {
    console.log(this.name)
    console.log(this.age)
};
Person.prototype.age = 5000;

var per1 = new Person;
per1.getName();
per1.age = 9;
per1.getName();
console.log(per1.age);
var per2 = new Person;
console.log(per2.age);


let ary = [
    {name:1,age:2,number:1,son:'son1'},
    {name:2,age:23,number:2,son:'son2'},
    {name:2,age:22,number:3,son:'son3'},
    {name:1,age:12,number:4,son:'son4'},
    {name:1,age:42,number:5,son:'son5'}
]
function fn(ary){
    let arr = [];
    ary.forEach(item=>{
        let bol = arr.some(val=>{
            if(val.name===item.name){
                let obj = {};
                Object.keys(item).forEach(v=>{
                    console.log(v)
                    if(v!='name'||v!='age'){
                        obj[v] = item[v]
                    }
                })
                val.list.push(obj);
                return true
            }
        })
        if(!bol){
            let obj = {};
            Object.keys(item).forEach(v=>{
                if(v!='name'||v!='age'){
                    obj[v] = item[v]
                }
            })
            arr.push({name:item.name,list:[obj]});
        }
    })
    return arr;
}
fn(ary)