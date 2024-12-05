import { combineReducers } from '@reduxjs/toolkit';
import templateReducer from './templateSlice';
import testimonialReducer from './testimonialSlice';
import productReducer from './productSlice';

const rootReducer = combineReducers({
    //name: nameReducer,
    template: templateReducer,
    testimonial: testimonialReducer,
    product: productReducer,
});

export default rootReducer;