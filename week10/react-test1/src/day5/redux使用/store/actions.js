import * as types from './actions-types'
export function add(num){
  return {
    type:types.add,
    num:num
  }
}
export const minus = (num)=>{
  return (dispatch,getState)=>{
    setTimeout(()=>{
      dispatch({
        type:types.minus,
        num:num
      })
    },1000)
  }
}