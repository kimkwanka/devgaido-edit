import { combineReducers } from 'redux';
import user from './userReducer';
import files from './filesReducer';

export default combineReducers({ user, files });
