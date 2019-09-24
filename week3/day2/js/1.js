// 正则是引用数据类型
var reg = /\d/;  // 字符串中只要 有数字即可
var reg = /^\d/; // 字符串需要以数字开头
var reg = /^\dqqq/; // 字符串需要以数字开头 数字后边必须是 qqq
console.log(reg.test('123qqq'))
console.log(reg.test('1qqqfaersd撒大苏打'))
var reg = /\d$/; // 字符串需要以数字结尾  
var reg = /qqq\d$/; // 字符串需要以数字结尾   数字前边必须是 qqq
var reg = /^\d$/; // 只能匹配单个数字
var reg2 = new RegExp('\\d');

console.log(reg.test('qwer234wer'))

var reg = /^\d?$/
console.log(reg.test('100'))//false
console.log(reg.test('0'))// true
console.log(reg.test(''))// true

var reg = /^\d*$/
console.log(reg.test('1001323132234234'))// true
console.log(reg.test('0'))  // true
console.log(reg.test(''))  //  true

var reg = /^\d+$/
console.log(reg.test('1001323132234234'))// true
console.log(reg.test('0'))  // true
console.log(reg.test(''))  //  false

var reg = /\d{3}/;// \d\d\d
console.log(reg.test('1001323132234234'))// true
console.log(reg.test('qqq34qqqqq0'))  //  false
console.log(reg.test('www123weq213123'))  //  true
console.log(reg.test('www1233123'))  //  true
console.log(reg.test('123'))  //  true


var reg = /^\d{3}$/;// 
console.log(reg.test('1001323132234234'))// false
console.log(reg.test('qqq34qqqqq0'))  //  false
console.log(reg.test('www123weq213123'))  //  false
console.log(reg.test('www1233123'))  //  false
console.log(reg.test('123'))  //  true


var reg = /^[1.2]$/;  // 中括号中的点就是点本身 不是代表任意字符
console.log(reg.test('1.2'))// false
console.log(reg.test('1q2'))  //  false
console.log(reg.test('1'))  //  true
console.log(reg.test('12'))  //  false
console.log(reg.test('2'))  //  true
console.log(reg.test('.'))  //  true
console.log(reg.test('q'))  //  false

var reg = /^[1.2]+$/;  // 只要字符串是由 2 1  .  三个字符组成的    都是true
console.log(reg.test('1.21111'))// true
console.log(reg.test('1q2'))  //  false
console.log(reg.test('1'))  //  true
console.log(reg.test('12'))  //  true
console.log(reg.test('2'))  //  true
console.log(reg.test('.'))  //  true
console.log(reg.test('q'))  //  false
console.log(reg.test(''))  //  true



var reg = /18|19/;
console.log(reg.test('18')) // true
console.log(reg.test('19')) // true
console.log(reg.test('189')) // true
console.log(reg.test('1819'))// true
console.log(reg.test('118'))// true
console.log(reg.test('1918'))// true


var reg = /^18|19/; // 以 18 开头 或者 有 19; 或的优先级高 ；他把两边当作了两个整体
console.log(reg.test('18')) //  true
console.log(reg.test('44441923424244')) // false
console.log(reg.test('1893453245354')) //  true
console.log(reg.test('1819'))// true
console.log(reg.test('118'))//  false
console.log(reg.test('1918'))// true




var reg = /18|19$/;// 含有 18   或者  以19结尾的
console.log(reg.test('18')) // true
console.log(reg.test('19')) // true
console.log(reg.test('189')) // true
console.log(reg.test('1819'))// true
console.log(reg.test('118'))// true
console.log(reg.test('1918'))// true
console.log(reg.test('sgsgsdfgsgss19'))// true




var reg = /^18|19$/;// 以18开头   或 以19 结尾;
console.log(reg.test('18')) // true
console.log(reg.test('19')) // true
console.log(reg.test('189')) // true
console.log(reg.test('1819'))// true
console.log(reg.test('118'))// false
console.log(reg.test('werw19'))// true
console.log(reg.test('18ffwefsf'))// true
console.log(reg.test('18dgfgdg19'))// true



var reg = /^(18|19)$/;// /^18$/   /^19$/
var reg = /^1[89]$/
console.log(reg.test('18')) // true
console.log(reg.test('19')) // true
console.log(reg.test('189')) // false
console.log(reg.test('1819'))// false
console.log(reg.test('118'))// false
console.log(reg.test('werw19'))// false
console.log(reg.test('18ffwefsf'))// false
console.log(reg.test('18dgfgdg19'))// false



var reg = /Windows(?=95|98|NT|2000)/
console.log(reg.test('Windows'))
console.log(reg.test('Windows96'))
console.log(reg.test('Windows95'))
console.log(reg.test('Windows2000'))

