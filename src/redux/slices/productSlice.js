import { createSlice } from '@reduxjs/toolkit';


const products = [
    { name: "Shampoo", img: "images/Shampoo.png", price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: true},
    { name: "Conditioner", img: "images/Conditioner.png", price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: true },
    { name: "Product3", img: ["images/naturalflo-product3-front.jpeg", "images/naturalflo-product3-back.jpeg"], price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: false },
    { name: "Product4", img: "image/fake-img.png", price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: false },
    { name: "Product5", img: "image/fake-img.png", price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: false },
    { name: "Product6", img: "image/fake-img.png", price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: false },
    { name: "Product7", img: "image/fake-img.png", price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: false },
    { name: "Product8", img: "image/fake-img.png", price: "XX.00", description: 'Description of the product goes here.', link: 'https://www.etsy.com/', featured: false },
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
