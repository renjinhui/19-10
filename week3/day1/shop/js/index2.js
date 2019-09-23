// 获取数据 展示到页面上；

let data = null;
let oLis = document.getElementsByTagName('li');
let oLis2 = document.querySelectorAll('li');
// getElement系列获取到的元素集合是有 映射关系的； 当页面上增加或者减少了 对应的元素； 该变量会跟着默认能改变
// query系列获取到的元素 没有这种映射关系，获取的时候是哪些元素，那么对应的变量就永远是哪些变量；
console.log(oLis);
console.log(oLis2);
let xhr = new XMLHttpRequest(); // 创造实例
xhr.open('get', './data.json', true); // true 代表异步； false 同步
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // console.log(JSON.parse(xhr.response));
        data = JSON.parse(xhr.response)
        render(data); // 请求成功之后 再去渲染数据
        myBind();
    }
}
xhr.send();

let box = document.getElementById('box'),
    timeBtn = document.getElementById('timeBtn'),
    priceBtn = document.getElementById('priceBtn'),
    commentBtn = document.getElementById('commentBtn');

function render(ary) {
    // 把数据渲染到页面上
    console.log(ary); // ary就是后台传过来的数组；
    let str = '';
    ary.forEach(item => {
        // item 就是数组中的每一个对象；
        let {
            img,
            title,
            price,
            num
        } = item;
        str += `<li qqq=${price}>
                <div class="imgBox">
                    <img src="${img}" alt="">
                </div>
                <div class="til">${title}</div>
                <div class="desc">${title}</div>
                <div class="price">￥${price}</div>
                <div class="botBox">
                    <div>选购</div>
                    <div>${num}评价</div>
                </div>
            </li>`;
    })
    // str 就是 拼接好的字符串； 
    box.innerHTML = str;
}
function myBind(){
    timeBtn.onclick = function(){
        let ary = [...oLis];
        ary.sort((a,b)=>{
            return a.getAttribute('qqq') - b.getAttribute('qqq')
        })
        ary.forEach(item=>box.appendChild(item))
        // box.appendChild(oLis[0]);// 把第一个LI元素 添加到 box 的末尾；
        // 若添加的是页面上已经存在的元素， 那么 只是相当于改变一下元素的位置， 不会新增元素；
        // DOM 的回流；当页面的结构发生改变时，需要浏览器重新渲染页面；
        // DOM 的重绘  结构不发生改变 只是样式(除了哪些改变位置的修改)需要修改的时候，也就是只需要从渲染对应的css的时候；
    }
}
var a = document.createDocumentFragment()// 文档碎片
