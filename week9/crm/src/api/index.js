import http from './http'

export function judgeLogin(){
  return http.get('/user/login').then(data=>{
    return data.code == 0
  })
}

// 请求部门列表数据
export function getDpList(){
  return http.get('/department/list')
}
// 删除部门列表中的数据
export function delDpList(departmentId){
  return http.get('/department/delete',{
    params:{departmentId}
  })
}
// 新增部门接口
export function addDpList(option){
  return http.post('/department/add',option)
}
// 更新部门接口
export function updateDpList(option){
  return http.post('/department/update',option)
}


// 获取用户列表接口
export function getUserList(option){
  // option ==>  {departmentId:0,search:''}
  return http.get('/user/list',{
    params:option
  })
}
// 新增用户
export function addUserList(option){
  return http.post('/user/add',option)
}




// 获取职务列表
export function getJobList(){
  return http.get('/job/list')
}