
export function changeDpList(state,option){
  state.departmentList = option.data
  localStorage.setItem('departmentList',JSON.stringify(option.data))
}