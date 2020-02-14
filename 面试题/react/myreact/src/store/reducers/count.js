import * as types from '../action-types'
let state1 = {
  count:100
}
const countReducer=(state=state1,action)=>{
  switch (action.type) {
    case types.ADD:
      return{
        ...state,
        count:state.count+action.num
      }
    case types.MINUS:
      return{
        ...state,
        count:state.count-action.num
      }
    default:
      return {
        ...state
      }
  }
}
export default countReducer;