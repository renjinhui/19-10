export default [
    {
        path:'/my',
        name:'my',
        component:() => import(/* webpackChunkName: "customer" */ '@/components/customer/my')
    },
    {
        path:'/addCustomer',
        name:'addCustomer',
        component:() => import(/* webpackChunkName: "customer" */ '@/components/customer/add')
    },
    {
        path:'/all',
        name:'all',
        component:() => import(/* webpackChunkName: "customer" */ '@/components/customer/all')
    }
]