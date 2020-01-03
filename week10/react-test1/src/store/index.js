import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';//可以让 dispatch接收函数 
import * as reducers from './reducers'
let store = createStore(combineReducers({
  ...reducers
  // colorReducer:colorReducer
  // countReducer:countReducer
}),applyMiddleware(reduxThunk))
console.log(store.getState());
export default store;