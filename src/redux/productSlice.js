import { createSlice } from '@reduxjs/toolkit';


const products = [
    { name: "Shampoo", img: "images/Shampoo.jpg", price: "XX.00" },
    { name: "Conditioner", img: "images/Conditioner.jpg", price: "XX.00" },
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
