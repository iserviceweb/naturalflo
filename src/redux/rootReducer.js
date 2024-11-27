import { combineReducers } from '@reduxjs/toolkit';
import testReducer from './testSlice';

const rootReducer = combineReducers({
    //name: nameReducer,
    test: testReducer,
});

export default rootReducer;