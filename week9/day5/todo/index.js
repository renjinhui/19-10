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
        ary: [{
            id: 1,
            todo: '吃饭',
            done: false,
            editable: false
        }, {
            id: 2,
            todo: '睡觉',
            done: false,
            editable: false
        }, {
            id: 3,
            todo: '打豆豆',
            done: true,
            editable: false
        }],
        todo:'',
        hash:'',// 用来存储当前路径的hash值
    },
    created() {
        this.hash = location.hash || '#/all';
        window.addEventListener('hashchange',()=>{
            this.hash = location.hash;
        })
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
        del(n){
            this.ary.splice(n,1)
        }
    },
})