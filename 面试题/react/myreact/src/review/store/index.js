import { createStore,combineReducers,applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import count123 from './countReducer.js'
import color123 from './colorReducer.js'
let store = createStore(combineReducers({color123,count123}),applyMiddleware(reduxThunk))
export default store