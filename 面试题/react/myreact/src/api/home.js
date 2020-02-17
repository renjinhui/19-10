import http from './http'
export function getDepartList() {
  return http.get('/department/list')
}
export function addDepartment(data){
  return http.post('/department/add',data)
}
export function upDateDepartment(data){
  return http.post('/department/update',data)
}
export function delDepartment(data){
  return http.get('/department/delete',data)
}
export function getDepartmentInfo(data){
  return http.get('/department/info',data)
}