function colorReducer(state={
  color:'red'
},action){
  switch (action.type) {
    case "CHANGECOLOR":
      return {
        ...state,
        color:action.color||state.color
      }
    default :
      return {
        ...state
      }    
  }
}
export default colorReducer