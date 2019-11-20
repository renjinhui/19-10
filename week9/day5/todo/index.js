Vue.directive('focus',function(el,obj){
    if(obj.value){
        setTimeout(() => {
            el.focus()
        }, 10);
    }
})
let vm = new Vue({
    el: '#app',
    data: {
        ary: [],
        todo:'',
        count:0,
        hash:'',// 用来存储当前路径的hash值
    },
    computed: {
        todoAry(){
            // 未完成的事情的个数， 因为只要数组发生改变  count就要重新赋值
            this.count = this.ary.filter(item=>!item.done).length;

            // 只要this.ary发生改变  就要把数据存储到本地
            localStorage.setItem('mytodolist',JSON.stringify(this.ary))

            // 依赖于 ary  依赖于 hash
            switch (this.hash) {
                case '#/all':
                    // 若是全部列表  则把整个数组返回
                    return this.ary
                    break;
                case '#/finished':
                    // 若是完成列表 则返回 ary中 done属性是true的项
                    return this.ary.filter(item=>item.done)
                    break;
                case '#/unfinished':
                    return this.ary.filter(item=>!item.done)
                    break    
                default:
                    break;
            }
        }
    },
    created() {
        this.hash = location.hash || '#/all';
        window.addEventListener('hashchange',()=>{
            this.hash = location.hash;
        });
        // 从本地存储中获取数据
        this.ary = JSON.parse(localStorage.getItem('mytodolist'))||[];

    },
    methods: {
        submit(){
            this.todo = this.todo.trim();
            if(!this.todo)return;
            let obj = {
                id:Math.random(),
                done:false,
                todo:this.todo,
                editable:false
            }
            this.ary.unshift(obj);
            this.todo = '';
        },
        change(obj){
            obj.editable = !obj.editable
        },
        del(obj){
            this.ary = this.ary.filter(item=>item.id!==obj.id)
        }
    },
    watch: {
        /* ary(){
            console.log(666)
        } */
        ary:{
            deep:true,
            handler(newV,oldV){
                console.log(666)
            }
        }
    },
})