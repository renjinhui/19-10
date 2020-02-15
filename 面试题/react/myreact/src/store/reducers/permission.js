const initState = {
  limit:[{
            title:'部门管理',
            type:'departhandle',
            icon:'profile',
            tabs:[{text:'部门列表',url:"/home/org/department"},{text:'新增部门',url:"/home/org/addDepartment"}]
        },{
            title:'职务管理',
            type:'jobhandle',
            icon:'project',
            tabs:[{text:'职务列表',url:"/home/org/job"},{text:'新增职务',url:"/home/org/addJob"}]
        },{
            title:'员工管理',
            type:'userhandle',
            icon:'user',
            tabs:[{text:'员工列表',url:"##5"},{text:'新增员工',url:"##6"}]
        }]
}
function permission(state=initState,action){
    let power = localStorage.getItem('power')||'';
    power = power.split('|');
    //userhandle|departhandle|jobhandle
    return state.limit.filter(item=>{
        return power.includes(item.type) 
    })
}
export default permission