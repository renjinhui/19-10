/* export default {
    add(state,option){
        state.count += option.n
    },
    minus(state,option){
        state.count -= option.n
    },
} */

export const add = (state,option)=>{
    state.count += option.n
}
export function minus(state,option){
    state.count -= option.n
}