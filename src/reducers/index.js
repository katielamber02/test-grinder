import { combineReducers } from 'redux';
import userReducer from './users'
const rootReducer = combineReducers({
  //state: (state = {}) => state
  users:userReducer
});

export default rootReducer;