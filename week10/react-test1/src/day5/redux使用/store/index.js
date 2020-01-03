import { createStore,combineReducers,applyMiddleware } from "redux";
import * as reducers from "./reducers";
import reduxThunk from 'redux-thunk';
export default createStore(combineReducers({
  ...reducers
}),applyMiddleware(reduxThunk))