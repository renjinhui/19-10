import { createStore,combineReducers,applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import countReducer from './reducers/count'
import permission from './reducers/permission'
const store = createStore(combineReducers({
  countReducer,permission
}),applyMiddleware(reduxThunk))
export default store;