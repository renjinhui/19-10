import department from '@/components/department'
import addDepartment from '@/components/department/add'
import job from '@/components/job'
import addJob from '@/components/job/add'
import user from '@/components/user'
import addUser from '@/components/user/add'
export default [
    {
        path:'/department',
        name:'department',
        component:department
    },
    {
        path:'/addDepartment',
        name:'addDepartment',
        component:addDepartment
    },
    {
        path:'/job',
        name:'job',
        component:job
    },
    {
        path:'/addJob',
        name:'addJob',
        component:addJob
    },
    {
        path:'/user',
        name:'user',
        component:user
    },
    {
        path:'/addUser',
        name:'addUser',
        component:addUser
    }
]