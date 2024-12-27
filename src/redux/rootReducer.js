import { combineReducers } from '@reduxjs/toolkit';
import templateReducer from './slices/templateSlice';
import testimonialReducer from './slices/testimonialSlice';
import productReducer from './slices/productSlice';
import FAQReducer from './slices/FAQSlice';

const rootReducer = combineReducers({
    //name: nameReducer,
    template: templateReducer,
    testimonial: testimonialReducer,
    product: productReducer,
    faq: FAQReducer,
});

export default rootReducer;