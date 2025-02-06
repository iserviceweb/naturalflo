import { createSlice } from '@reduxjs/toolkit';


const products = [
    {
        name: "Shampoo",
        img: "images/Shampoo.jpg",
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        productID: 'INSERT:yourProductID',
        priceID: 'INSERT:yourPriceID',
        featured: true
    },
    {
        name: "Conditioner",
        img: "images/Conditioner.jpg",
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        productID: 'INSERT:yourProductID',
        priceID: 'INSERT:yourPriceID',
        featured: true
    },
    {
        name: "Product3",
        img: ["images/naturalflo-product3-front.jpeg", "images/naturalflo-product3-back.jpeg"],
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        productID: 'INSERT:yourProductID',
        priceID: 'INSERT:yourPriceID',
        featured: false
    },
    { name: "Product4", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', productID: 'INSERT:yourProductID', priceID: 'INSERT:yourPriceID', featured: false },
    { name: "Product5", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', productID: 'INSERT:yourProductID', priceID: 'INSERT:yourPriceID', featured: false },
    { name: "Product6", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', productID: 'INSERT:yourProductID', priceID: 'INSERT:yourPriceID', featured: false },
    { name: "Product7", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', productID: 'INSERT:yourProductID', priceID: 'INSERT:yourPriceID', featured: false },
    { name: "Product8", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', productID: 'INSERT:yourProductID', priceID: 'INSERT:yourPriceID', featured: false },
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
