Vue.filter('money',function(val){
    return "￥"+(val/100).toFixed(2)
})
let vm = new Vue({
    el:"#app",
    data:{
        name:"珠峰",
        datalist:[],
        total:0,
        checkAll:true,
        show:false,
        delIndex:null
    },
    created() {
        // 实例创建完成之后会触发该函数；（钩子函数）
        this.getData();
    },
    methods: {
        getData(){
            fetch('http://127.0.0.1:8080/jd/list').then((res)=>{
                return res.json()
            }).then(data=>{
                console.log(data)
                this.datalist = data.data;
                this.sum();
                // 重置checkAll属性
                this.checkAll = this.datalist.every(item=>item.isSelect)
            }).catch((err)=>{
                console.log(err)
            })
        },
        sum(){
            // 求总价
            //this.datalist.filter(item=>item.isSelect) 筛选出 选中的商品
            /* let ary = this.datalist.filter(item=>item.isSelect);
            let t = 0;
            ary.forEach(item=>{
                t += item.count*item.price
            })
            this.total = t; */
            this.total = this.datalist.filter(item=>item.isSelect).reduce((prev,next)=>prev+next.count*next.price,0)
        },
        checkOneFn(obj){
            // obj 是选择的那一条数据
            fetch('http://127.0.0.1:8080/jd/isselect',{
                method:'post',
                body:JSON.stringify({id:obj.id,isSelect:obj.isSelect})
            }).then(data=>{
                return data.json();
            }).then(data=>{
                console.log(data)
                if(data.code == 0){
                    this.checkAll = this.datalist.every(item=>item.isSelect)
                    this.sum();
                }
            })
            
        },
        checkAllFn(){
            // 点击全选触发的事件
            // this.checkAll
            this.datalist.forEach(item=>{
                item.isSelect = this.checkAll
            })
            // 重新计算总价
            this.sum();
        },
        del(n){
            // this.datalist.splice(n,1);
            // this.sum();
            this.delIndex = n;
            this.show = true
        },
        cancel(){
            this.show = false
        },
        sure(){
            this.datalist.splice(this.delIndex,1);
            this.sum();
            this.show = false
        },
        clear(){
            this.datalist = [];
            this.sum();
            this.checkAll = false;
        }
    },
})