import { getDpList,getUserList,getJobList } from "@/api/index.js";
export function changeDpList({commit}){
  getDpList().then(data=>{
    if(data.code == 0){
      commit('changeDpList',{
        data:data.data
      })
    }
  })
}

export function changeUserList({commit},option={}){
  // 调用ajax请求
  getUserList(option).then(data=>{
    if(data.code == 0){
      commit('changeUserList',{
        data:data.data
      })
    }
  })
}

export function changeJobList({commit},option={}){
  // 调用ajax请求
  getJobList(option).then(data=>{
    if(data.code == 0){
      commit('changeJobList',{
        data:data.data
      })
    }
  })
}