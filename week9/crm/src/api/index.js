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