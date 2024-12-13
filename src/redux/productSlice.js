import { createSlice } from '@reduxjs/toolkit';


const products = [
    { name: "Orange", img: "images/temp/p1.png", price: "10.00" },
    { name: "Durian", img: "images/temp/p2.png", price: "10.00" },
    { name: "Kiwi", img: "images/temp/p3.png", price: "10.00" },
    { name: "Mango", img: "images/temp/p4.png", price: "10.00" },
    { name: "Banana", img: "images/temp/p5.png", price: "10.00" },
    { name: "Apple", img: "images/temp/p6.png", price: "10.00" },
];

const initialState = {
    products: products
};


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
});

export const {
} = productSlice.actions;

export default productSlice.reducer;
