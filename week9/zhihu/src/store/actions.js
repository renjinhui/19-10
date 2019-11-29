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