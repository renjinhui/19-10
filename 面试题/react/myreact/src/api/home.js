import http from './http'
export function getDepartList() {
  return http.get('/department/list')
}
export function addDepartment(data){
  return http.post('/department/add',data)
}