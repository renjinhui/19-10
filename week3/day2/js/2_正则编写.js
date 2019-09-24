//正则  没有 ^$  则表示；只要字符串中有符合正则的部分即可
// 有 ^$ 代表 整个字符串 必须全部满足正则条件；

//1===================编写一个正则  可以 匹配 有效数字
// 可以有 +- 号  ； 可以有小数 ， 整数部分多位数不能以0开头
// +- 是一个整体
// 小数部分是一个整体  ：  \.\d+
// 整数部分 多位数时 首位不能是0；  [1-9]\d+|\d
var reg = /^[-+]?([1-9]\d+|\d)(\.\d+)?$/
var reg = /^[-+]?([1-9]\d*|\d)(\.\d+)?$/
var reg = /^[-+]?([1-9]\d*|0)(\.\d+)?$/



var reg = /^(\+|-)?(([1-9]\d*)|0)(\.\d+)?$/;
var reg = /^[-+]?(([1-9]\d+)|\d)(\.\d+)?$/;
var reg = /^[-+]?(([1-9]\d*)|0)(\.\d+)?$/;
console.log(reg.test('0123'),66666) 
console.log(reg.test('10123')) 
console.log(reg.test('-10123')) 
console.log(reg.test('+123')) 
console.log(reg.test('+123.123')) 
console.log(reg.test('+123..123'),66666) 
console.log(reg.test('+0.123')) 
console.log(reg.test('+0.'),6666) 
console.log(reg.test('0')) 
console.log(reg.test('q1')) 
console.log(reg.test('2w')) 

var reg = /^[+-]?((\d+\.\d+)|([1-9]\d*\.?\d+))$/ ; // .10123

//2=================== 匹配手机号
// 手机号 1开头   3456789  后边没要求
var reg = /^1[3-9]\d{9}$/



//3=====================QQ 邮箱的验证
// 至少5位 不能以0 开头； 至多11位    @qq.com @QQ.com @Qq.COM
var reg = /^[1-9]\d{4,10}@qq\.com$/i

var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 6~18个字符，可使用字母、数字、下划线，需以字母开头
var reg = /^[a-zA-Z]\w{5,17}$/


// 4 ==============   密码  8-18； 既有大写 又有小写； 还得有数字
function judge(str){
    if(str.length>18|| str.length<8)return fasle
    if(!/[A-Z]/.test(str))return false
    if(!/[a-z]/.test(str))return false
    if(!/\d/.test(str))return false
    return true

    // if(str.length>=8 && str.length<=18 &&/[A-Z]/.test(str)&&/[a-z]/.test(str)&&/\d/.test(str) ){
    //     return true
    // }
    // return false
}

// 5 身份证号码的验证；只验证 18位；
// 14523419900204201X
var reg = /^\d{6}\d{4}\d{2}\d{2}\d{2}\d(\d|X)$/


// 匹配一个 18 - 65 年龄段 
// 18 19
// 20 - 59
// 60 - 65 
var reg = /^(1[89]|[2-5]\d|6[0-5])$/ 





