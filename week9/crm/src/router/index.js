import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

import org from './org'
import crm from './customer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children:[].concat(org,crm)
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path:'/test',
    component:() => import('../views/test/test.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
