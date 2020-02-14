import { createStore,combineReducers,applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import countReducer from './reducers/count'
const store = createStore(combineReducers({
  countReducer
}),applyMiddleware(reduxThunk))
export default store;