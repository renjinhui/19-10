function countReducer(state={
  count:0
},action){
  switch (action.type) {
    case "ADD":
      return {
        count:state.count+action.num
      }
    case "MINUS":
      return {
        count:state.count-action.num
      }
    default :
      return {
        ...state
      }  
  }
}
export default countReducer