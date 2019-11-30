import Home from '@/components/home/home.vue'
export default [
    {
        path:'/home',
        name:'home',
        component:Home,
        redirect:'/home/hot',// 进入home之后重定向到 hot
        children:[
            {
                path:'/home/focus',
                component:() => import(/* webpackChunkName: "focus" */ '../components/home/focus/focus.vue')
            },
            {
                path:'/home/recommend',
                component:() => import(/* webpackChunkName: "recommend" */ '../components/home/recommend/recommend.vue')
            },
            {
                path:'/home/hot',
                component:() => import(/* webpackChunkName: "hot" */ '../components/home/hot/hot.vue')
            }
        ]
    }
]