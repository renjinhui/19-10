import { getDpList } from "@/api/index.js";
export function changeDpList({commit}){
  getDpList().then(data=>{
    if(data.code == 0){
      commit('changeDpList',{
        data:data.data
      })
    }
  })
}