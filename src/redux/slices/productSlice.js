import { createSlice } from '@reduxjs/toolkit';


const products = [
    { name: "Shampoo", img: "images/Shampoo.jpg", price: "XX.00", featured: true },
    { name: "Conditioner", img: "images/Conditioner.jpg", price: "XX.00", featured: true },
    { name: "Product3", img: "images/naturalflo-product3-front.jpeg", price: "XX.00", featured: false },
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
