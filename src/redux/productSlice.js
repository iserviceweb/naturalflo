import { createSlice } from '@reduxjs/toolkit';


const products = [
    { name: "Orange", img: "images/p1.png", price: "10.00" },
    { name: "Durian", img: "images/p2.png", price: "10.00" },
    { name: "Kiwi", img: "images/p3.png", price: "10.00" },
    { name: "Mango", img: "images/p4.png", price: "10.00" },
    { name: "Banana", img: "images/p5.png", price: "10.00" },
    { name: "Apple", img: "images/p6.png", price: "10.00" },
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
