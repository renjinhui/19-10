
let departmentList = JSON.parse(localStorage.getItem('departmentList'))

export default {
  departmentList:departmentList || [], // 存储的是 部门列表数据
}