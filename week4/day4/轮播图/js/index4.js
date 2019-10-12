$.fn.extend({   // 把对应的方法放在了JQ的原型上
    myFn:function () {
        console.log(9);
        console.log(this); //这里的this看谁执行这个函数，执行它的是JQ对象时，this就是JQ对象
    },
    banner: function(){
        this.$box = this,
            // $ul = $('#box ul');
            // $ul = $box.children('.img_box')  chidren 只能找子元素，不能找其他的后代元素
        this.$ul = this.$box.find('ul') //find可以找到所有后代
            // console.log($ul)
        this.$tipBox = this.$box.find('.tip_box'),
        this.$tips = this.$tipBox.children('.tip'),
        this.$leftBtn = this.$box.find('.left_btn'),
        this.$rightBtn = this.$box.find('.right_btn');
        this.n = 0;
        this.data = null;
        this.timer = null;
        this.getData();
        this.autoMove();
    },
    getData : function(){
            // var _this = this;
            $.ajax({
                type:'get',
                url:'./data.json',
                success:(data)=>{
                    console.log(data);
                    console.log(this);
                    this.render(data);
                    this.bindEvent(data);
                }
            })
    },
    render : function(data){
            let str = '';
            let tipStr = '';
            data.push(data[0])
            data.forEach((item, index)=>{
                let {img, desc} = item;
                str += `<li>
                            <img src="${img}" alt="">
                            <p class="desc">${desc}</p>
                        </li>`
                if (index == 0) {
                    tipStr += `<span class="tip current"></span>`
                } else if (index < data.length - 1) {
                    tipStr += `<span class="tip"></span>`
                }
            })
            this.$ul.width(590*data.length);
            this.$ul.html(str);
            this.$tipBox.html(tipStr);
            this.$tips = this.$tipBox.find('.tip');

    },
    move: function(){
        this.n++;
        if (this.n > this.$tips.length) {
            this.$ul.css('left',0);
            this.n = 1;
        }
        this.$ul.animate({left:-590*this.n},500);
        this.autoFocus(this.n)
    },
    autoMove:function(){
        this.timer = setInterval(()=>{
            this.move();
        },1000)
    },
    autoFocus:function(m){
        if (m >= this.$tips.length) {
            m = 0;
        }
        this.$tips.eq(m).addClass('current').siblings().removeClass('current');
    },
    bindEvent: function(data){
        var _this = this;
        this.$leftBtn.on('click', ()=>{
            this.n--;
            if (this.n < 0) {
                this.$ul.css({left:-590*this.$tips.length});
                this.n = this.$tips.length - 1;
            }
            this.$ul.animate({left:-590*this.n},500);
            this.autoFocus(this.n);
        })
        this.$rightBtn.on('click', ()=>{
            this.move();
        })
        this.$tips.on('click', function(){
            let m = $(this).index();
            console.log(m)
            _this.$ul.animate({left:-590*m},200);
            _this.autoFocus(m);
            _this.n = m;
        })
        this.$box.on('mouseenter', ()=>{
            clearInterval(this.timer);
        })
        this.$box.on('mouseleave', ()=>{
            this.autoMove();
        })
    }
})
$('#box').banner()
