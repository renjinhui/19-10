$.fn.extend({
    // 把对应的方法放到了JQ的原型上
    myFn: function () {
        console.log(666)
        console.log(this);
    },
    banner: function () {
        let $box = this,
            // ul = $('#box .img_box ul'),
            // $ul = $box.children('.img_box').children('ul');
            $ul = $box.find('ul'),
            $tipBox = $box.find('.tip_box'),
            $tips = $tipBox.children('.tip'),
            $leftBtn = $box.find('.left_btn'),
            $rightBtn = $box.find('.right_btn');

        let n = 0,
            timer = null;

        // 获取数据
        // xhr.open('get','./data.json',true);
        function getData() {
            $.ajax({
                type: 'get',
                url: './data.json',
                success: function (data) {
                    // 请求成功会执行的函数
                    console.log(data)
                    render(data);
                    tipClick(); // 载数据加载完成之后再去绑定事件
                },
                error: function () {
                    // 请求失败的时候 会执行该函数
                    console.log('失败')
                }
            })
        }
        getData();

        function render(data) {
            let str = '';
            let tipStr = '';
            data.push(data[0]); // 补图
            data.forEach((item, index) => {
                str += `<li>
                <img src="${item.img}" alt="">
                <p class="desc">${item.desc}</p>
            </li>`;
                if (index == 0) {
                    tipStr += `<span class="tip current"></span> `
                } else if (index < data.length - 1) {
                    tipStr += `<span class="tip"></span> `
                }
            });
            // $ul[0].innerHTML = str;
            $ul.html(str);
            $ul.width(590 * data.length);
            $tipBox.html(tipStr);
            $tips = $tipBox.children('.tip'); // 更新 $tips
        }

        function move() {
            n++;
            if (n > $tips.length) {
                // 闪到第一张；
                $ul.css('left', 0); // $ul.css({left:0})
                n = 1;
            }
            $ul.animate({
                left: -590 * n
            }, 300);
            autoFocus(n); // 显示点的动作
        }

        function autoMove() {
            timer = setInterval(() => {
                move()
            }, 2000)
        }
        autoMove();

        function autoFocus(m) {
            if (m >= $tips.length) {
                m = 0; // m == $tips.length 显示的是伪第一张
            }
            // m 就是要有点的哪个索引
            $tips.eq(m).addClass('current').siblings().removeClass('current')
        }
        $box.on('mouseenter', function () {
            clearInterval(timer);
        })
        $box.on('mouseleave', function () {
            autoMove();
        })
        $leftBtn.on('click', function () {
            n--;
            if (n < 0) {
                $ul.css({
                    left: -$tips.length * 590
                }); // 闪到最后一张
                n = $tips.length - 1;
            }
            $ul.animate({
                left: -n * 590
            }, 200);
            autoFocus(n);
        })
        $rightBtn.on('click', function () {
            move();
        })

        function tipClick() {
            $tips.on('click', function () {
                let m = $(this).index();
                n = m;
                $ul.animate({
                    left: -590 * m
                }, 200);
                autoFocus(m);
            })
        }

    }
})
$('#box').banner()
$.extend({
    // 把对应的方法放到了JQ自身上（JQ 当作了普通对象）
    myFn: function () {
        console.log(999)
    }
})






// try {
//     console.log(555)
//     console.log(qqq)
// } catch (aaa) {
//     console.log(aaa)
// }

// console.log(666)