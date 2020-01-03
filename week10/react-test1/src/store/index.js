import {createStore,combineReducers} from 'redux'
import * as reducers from './reducers'
let store = createStore(combineReducers({
  ...reducers
  // colorReducer:colorReducer
  // countReducer:countReducer
}))
console.log(store.getState());
export default store;