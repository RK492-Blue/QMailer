// index.js enables us to import the entire reducers folder.
// The program will automatically reference index.js where we list down all the 
//  reducers available in this folder.

import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Whatever keys that we provide to this object are going to represent the keys that 
//  exist in our state object
export default combineReducers({
    auth: authReducer
});