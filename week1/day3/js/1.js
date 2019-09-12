(function () {
    var name = '珠峰';
    var age = 10;
    var obj = {}
    btn.onclick = function () {
        alert(name)
    }
})()

var login = function(){
    var name = '珠峰';
    var age = 10;
    var f = function () {
        console.log(name)
    }
    var f2 = function () {
        console.log(age)
    }
    return {
        init:function(){
            f();
            f2();
        },
        f3(){

        }
    }
}

var  sum = function(a,b){
    var c = 1000
    return function(){
        return a+b+c
    }
}