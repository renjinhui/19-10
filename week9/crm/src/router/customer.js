export default [
    {
        path:'/crm/my',
        name:'my',
        component:() => import(/* webpackChunkName: "customer" */ '@/components/customer/my')
    },
    {
        path:'/crm/addCustomer',
        name:'addCustomer',
        component:() => import(/* webpackChunkName: "customer" */ '@/components/customer/add')
    },
    {
        path:'/crm/all',
        name:'all',
        component:() => import(/* webpackChunkName: "customer" */ '@/components/customer/all')
    }
]