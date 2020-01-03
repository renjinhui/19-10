import * as types from './action-types'
export function countReducer(state={count:100},action){
  // 该函数 接收两个参数 一个state 一个action ；state是存放数据的 action是用来更改数据的依赖
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        count:state.count + action.qqq
      }
      break;
    case types.MINUS:
      return {
        ...state,
        count:state.count - action.qqq
      }  
    default:
      return {
        ...state
      }
  }
}
export function colorReducer(state={color:'blue'},action){
  switch (action.type) {
    case types.CHANGECOLOR:
      return {
        ...state,
        color:action.color
      }
      
    default:
      return {
        ...state
      }
      break;
  }
}