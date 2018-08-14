import { combineReducers } from 'redux';
import hrReducer from './hrReducer';

export default combineReducers({
  hrChecklist: hrReducer
});
