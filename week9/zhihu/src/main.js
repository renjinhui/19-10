import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less' // 引入共用样式
import '@/less/font.less'

// // 全部 引入的 方式
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
import {Search,Button,Icon, Tab, Tabs } from 'vant'
Vue.use(Search)
Vue.use(Button).use(Icon).use(Tab).use(Tabs)



Vue.config.productionTip = false

// 判断登录？
let token = localStorage.getItem('token');
if(token){
  store.commit('stateChange',{loginState:true})
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
