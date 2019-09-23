var reg = /d/;
var reg = new RegExp('\d')
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abcddd123456')) // true
var reg = /\d/;
var reg = new RegExp('\\d')
console.log(reg.test('qwert123456')) //true
console.log(reg.test('abcddd123456')) // true

var reg = /\\d/;
console.log(reg)
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abc\\ddd123456')) // true

var reg = /\W/
console.log(reg.test('wreqwerafad1231___'))

var reg = /\d?/
console.log(reg.test('qerq23425fadfwrew'))//true


var reg = /\d{2}/
console.log(reg.test('qerq2fadfwrew')) // false
console.log(reg.test('qerq23fadfwrew'))// true
console.log(reg.test('qerq23425fadfwrew'))//true

var reg = /\d{2,}/
console.log(reg.test('qerq2fadfwrew')) // false
console.log(reg.test('qerq23fadfwrew'))// true
console.log(reg.test('qerq23425fadfwrew'))//true



var reg = /^d/
console.log(reg.test('qerq23425fadfwrew'))//false
console.log(reg.test('dddderq23425fadfwrew'))//true

var reg = /^\d/
console.log(reg.test('qerq23425fadfwrew'))//false
console.log(reg.test('dddderq23425fadfwrew'))//false

var reg = /^\w/
console.log(reg.test('qerq23425fadfwrew'))//true
console.log(reg.test('dddderq23425fadfwrew'))//true

var reg = /d$/;// 以 字符d结尾
console.log(reg.test('qerq23425fadfwrew'))//false
console.log(reg.test('dddderq23425fadfwrew'))//false
console.log(reg.test('ddd'))//true

var reg = /\d$/;  //以数字结尾 
console.log(reg.test('qerq23425fadfwrew'))//false
console.log(reg.test('dddderq23425fadfwrew'))//false
console.log(reg.test('ddd'))//false

var reg = /d+$/;// 以 字符d结尾
console.log(reg.test('qerq23425fadfwrew'))//false
console.log(reg.test('dddderq23425fadfwrewd'))// true
console.log(reg.test('ddd'))//true

var reg = /d*$/;// 以 字符d结尾
console.log(reg.test('qerq23425fadfwrew'))//true
console.log(reg.test('dddderq23425fadfwrewd'))// true
console.log(reg.test('ddd'))//true


var reg = /d{2}$/;// 以 字符d结尾
console.log(reg.test('qerq23425fadfwrew'))//false
console.log(reg.test('dddderq23425fadfwrewd'))// false
console.log(reg.test('ddd'))//true


var reg = /wd{2}$/;// 以俩d结尾 前边是个 w；
console.log(reg.test('qerq23425fadfwrew'))//false
console.log(reg.test('dddderq23425fadfwrewd'))// false
console.log(reg.test('ddd'))//false
console.log(reg.test('wddd'))//false
console.log(reg.test('dwdd'))//true


var reg = /^d$/; // 以d开头 以d结尾 中间是个d ; 就是个d
console.log(reg.test('dwerwed')) // false
console.log(reg.test('dddd')) // false
console.log(reg.test('d')) // true

var reg = /^dd$/; // 以前边的d开头 以后边d结尾 中间啥也没有 ; 就是个dd
console.log(reg.test('dwerwed')) // false
console.log(reg.test('dddd')) // false
console.log(reg.test('d')) // false


var reg = /^d\wd$/; // 以前边的d开头 以后边d结尾 中间是一个数字字母下划线 ; 
console.log(reg.test('dwerwed')) // false
console.log(reg.test('dddd')) // false
console.log(reg.test('d')) // false
console.log(reg.test('d_d')) // true
console.log(reg.test('ded')) // true
console.log(reg.test('d2d')) // true
console.log(reg.test('d.d')) // false

var reg = /^d\w+d$/; // \
console.log(reg.test('dwerwed')) // true
console.log(reg.test('dddd')) // true

var reg = /^dd{2,}d$/; // \
var reg = /^d{4,}$/
console.log(reg.test('dwerwed')) // false
console.log(reg.test('dwed')) // false
console.log(reg.test('dddd')) // true
console.log(reg.test('ddddddd')) // true

var reg = /(wd){2}$/ ;// 代表 以 两个 wd 结尾
console.log(reg.test('fasdfawdwd')) // true
console.log(reg.test('fasdfawdwdwd'))//true
console.log(reg.test('fasdfawd')) // false

var reg = /^\d.123$/;// 以一个数字开头 以3结尾前边是12 12前边是除了换行以外的任意字符
var reg2 = /^\d\.123$/
console.log(reg.test('123.123'))// false
console.log(reg.test('q123.123'))// false
console.log(reg.test('123q123'))// false
console.log(reg.test('123q.123'))// false
console.log(reg.test('q.123'))// false
console.log(reg.test('0q123')) // true


var reg = /^\d+.123$/;// 'n个数字 任意 123'
console.log(reg.test('123.123'))//true
console.log(reg.test('q123.123'))//false
console.log(reg.test('123q123'))//true
console.log(reg.test('123q.123'))//false


var reg = /[a-c]/; //  只要有一个 a或者b或者c ； 结果就是true
console.log(reg.test('aqweaqe'))
var reg = /^[a-c]/; //  只要以 a或者b或者c  开头的字符串； 结果就是true
var reg = /^[a-c]{2}/; //  只要以 a到c之间的任意两个字符开头的字符串 结果都是true;

var reg = /[a-z0-9]/; // 小写字母和数字
var reg = /[0-9a-z]/;// 小写字母和数字
var reg = /[0-9a-zA-Z_]/; // \w

var reg = /[.]/ // 中括号中的点 代表 点 本身；












