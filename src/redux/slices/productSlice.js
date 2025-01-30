import { createSlice } from '@reduxjs/toolkit';


const products = [
    {
        name: "Shampoo",
        img: "images/Shampoo.jpg",
        price: "25.00",
        description: 'Description of the product goes here.',
        productID: 'prod_Rd8PDk8UgEG54Z',
        priceID: 'price_1Qjs97B7DxHdGWiwV7H0w9Pt',
        featured: true
    },
    {
        name: "Conditioner",
        img: "images/Conditioner.jpg",
        price: "25.00",
        description: 'Description of the product goes here.',
        productID: 'prod_RdpE2Q0QB9ZYCD',
        priceID: 'price_1QkXa2B7DxHdGWiwoa6yXdz7',
        featured: true
    },
    {
        name: "Product3",
        img: ["images/naturalflo-product3-front.jpeg", "images/naturalflo-product3-back.jpeg"],
        price: "25.00",
        description: 'Description of the product goes here.',
        productID: 'prod_RdpGs41OA4bAkI',
        priceID: 'price_1QkXbYB7DxHdGWiwePkuuA4B',
        featured: false
    },
    { name: "Product4", img: "image/fake-img.png", price: "1.00", description: 'Description of the product goes here.', productID: 'prod_Rdou6nt9GOoq60', priceID: 'price_1QlyPGB7DxHdGWiwCE8ufSz0', featured: false },
    { name: "Product5", img: "image/fake-img.png", price: "1.00", description: 'Description of the product goes here.', productID: 'prod_Rdou6nt9GOoq61', priceID: 'price_1QlyPGB7DxHdGWiwCE8ufSz0', featured: false },
    { name: "Product6", img: "image/fake-img.png", price: "1.00", description: 'Description of the product goes here.', productID: 'prod_Rdou6nt9GOoq62', priceID: 'price_1QlyPGB7DxHdGWiwCE8ufSz0', featured: false },
    { name: "Product7", img: "image/fake-img.png", price: "1.00", description: 'Description of the product goes here.', productID: 'prod_Rdou6nt9GOoq63', priceID: 'price_1QlyPGB7DxHdGWiwCE8ufSz0', featured: false },
    { name: "Product8", img: "image/fake-img.png", price: "1.00", description: 'Description of the product goes here.', productID: 'prod_Rdou6nt9GOoq64', priceID: 'price_1QlyPGB7DxHdGWiwCE8ufSz0', featured: false },
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
