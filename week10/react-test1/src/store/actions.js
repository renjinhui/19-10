import * as types from './action-types'
export const add = (num)=>{
  return {
    type:types.ADD,
    qqq:num
  }
}
export function minus(num){
  // setTimeout(() => {
  //   return {
  //     type: types.MINUS,
  //     qqq:num
  //   }
  // }, 2000);
  return function(dispatch,getState){
    let state = getState();
    // http.get().then((data)=>{
    //   dispatch({
    //     type: types.MINUS,
    //     qqq:num
    //   })
    // })
    setTimeout(() => {
      if(state.colorReducer.color == 'red'){
        num = 100
      }
      dispatch({
        type: types.MINUS,
        qqq:num
      })
    }, 2000);
  }
}
export function changeColor(color){
  return {
    type: types.CHANGECOLOR,
    color:color
  }
}