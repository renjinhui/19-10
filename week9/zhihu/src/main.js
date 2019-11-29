import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less' // 引入共用样式


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
