import * as types from './actions-types'
export function countReducer(state={count:100},action){
  switch (action.type) {
    case types.add:
      return {
        ...state,
        count:state.count + action.num
      }
      break;
    case types.minus:
      return{
        ...state,
        count:state.count - action.num
      }  
    default:
      return{
        ...state
      }
  }
}