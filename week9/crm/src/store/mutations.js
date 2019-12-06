
export function changeDpList(state,option){
  state.departmentList = option.data
  localStorage.setItem('departmentList',JSON.stringify(option.data))
}

export function  changeUserList(state,option){
  state.userList = option.data;
  localStorage.setItem('userList',JSON.stringify(option.data))
}

export function  changeJobList(state,option){
  state.jobList = option.data;
  localStorage.setItem('jobList',JSON.stringify(option.data))
}