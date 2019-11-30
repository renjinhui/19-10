import { hotlist } from "../api/home";

export function add(store,option){
    setTimeout(() => {
        store.commit('add',option)
    }, 1000);
}
export function minus({commit},option){
    setTimeout(() => {
        commit('minus',option)
    }, 1000);
}

export function getHotList({commit},option){
    return hotlist(option).then(data=>{
        commit('changeHotList',{
            oldType:option.oldType,
            newType:option.newType,
            data:data.data
        })
    })
}