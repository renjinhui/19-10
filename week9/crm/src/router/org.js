import department from '@/components/department'
import addDepartment from '@/components/department/add'
import job from '@/components/job'
import addJob from '@/components/job/add'
import user from '@/components/user'
import addUser from '@/components/user/add'
export default [
    {
        path:'/org/department',
        name:'department',
        component:department,
        meta:{
            type:'department',
            rootTil:"部门管理",
            til:'部门列表'
        }
    },
    {
        path:'/org/addDepartment',
        name:'addDepartment',
        component:addDepartment,
        meta:{
            type:'department',
            rootTil:"部门管理",
            til:'新增部门'
        }
    },
    {
        path:'/org/job',
        name:'job',
        component:job,
        meta:{
            type:'job',
            rootTil:"职务管理",
            til:'职务列表'
        }
    },
    {
        path:'/org/addJob',
        name:'addJob',
        component:addJob,
        meta:{
            type:'job',
            rootTil:"职务管理",
            til:'新增职务'
        }
    },
    {
        path:'/org/user',
        name:'user',
        component:user,
        meta:{
            type:'user',
            rootTil:"员工管理",
            til:'员工列表'
        }
    },
    {
        path:'/org/addUser',
        name:'addUser',
        component:addUser,
        meta:{
            type:'user',
            rootTil:"员工管理",
            til:'员工列表'
        }
    }
]