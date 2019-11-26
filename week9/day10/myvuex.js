(function(global,factory){
    global.Vuex = factory();
})(this,function(){
    let Vue;
    class Store{
        constructor(options){
            // Vue 代表的就是全局的Vue
            let vm = new Vue({
                data:{
                    state:options.state||{}
                },
            })
            // this.state = options.state||{}
            this.state = vm.state

            this.mutations = {};
            let mutations = options.mutations || {};
            Object.keys(mutations).forEach(key=>{
                this.mutations[key] = (option)=>{
                    mutations[key].call(this,this.state,option)
                }
            })

            this.actions = {};
            let actions = options.actions || {};
            Object.keys(actions).forEach(key=>{
                this.actions[key] = (option)=>{
                    // this 就是 store
                    // 第一个this是把函数中的this改成store
                    // 第二个this是传给函数的实参 store
                    actions[key].call(this,this,option)
                }
            })


            this.getters = {};
            let getters = options.getters||{};
            Object.keys(getters).forEach(key=>{
                Object.defineProperty(this.getters,key,{
                    get:()=>{
                        return getters[key].call(this,this.state)
                    }
                })
            })

            let commit = this.commit;
            this.commit = (type,option)=>{
                commit.call(this,type,option)
            }

            let dispatch = this.dispatch;
            this.dispatch = (type,option)=>{
                dispatch.call(this,type,option)
            }
        }
        commit(type,option){
            console.log(this.mutations,type)
            this.mutations[type](option)
        }
        dispatch(type,option){
            this.actions[type](option)
        }
    }
    function install(_Vue){
        Vue = _Vue;
        // console.log(666,_Vue)
        // 给当前项目的每一个组件都混入了 一个beforeCreate的钩子函数
        // 若某个组件存在对应的钩子函数，那么先执行混入的钩子函数
        _Vue.mixin({
            beforeCreate() {
                // this 指的就是当前哪个组件
                // console.log('beforeCreate',this)
                if(this.$options && this.$options.store){
                    // 证明该组件是 根组件 
                    // 把对应的store放到了自身$store上
                    this.$store = this.$options.store;
                    console.log(11111)
                }else{
                    // 走到这里的this都是 其他后代组件
                    this.$store = (this.$parent && this.$parent.$store)
                }
            },
        })
    }
    function mapState(ary){
        let obj = {};
        ary.forEach(key=>{
            obj[key] = function(){
                // this 是当前的实例
                return this.$store.state[key]
            }
        })
        return obj;
    }
    function mapGetters(ary){
        let obj = {};
        ary.forEach(key=>{
            obj[key] = function(){
                // this 是当前的实例
                return this.$store.getters[key]
            }
        })
        return obj;
    }

    function mapActions(ary){
        let obj = {};
        ary.forEach(key=>{
            obj[key] = function(option){
                this.$store.dispatch(key,option)
            }
        })
        return obj;
    }

    function mapMutations(ary){
        let obj = {};
        ary.forEach(key=>{
            obj[key] = function(option){
                this.$store.commit(key,option)
            }
        })
        return obj;
    }
    return {
        Store,
        install,
        mapState,
        mapGetters,
        mapActions,
        mapMutations
    }
});