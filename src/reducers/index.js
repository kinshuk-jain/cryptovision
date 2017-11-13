import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import { hideTopBar } from './topBar';

export default combineReducers({
  user,
  runtime,
  hideTopBar,
});
