import { createSlice } from '@reduxjs/toolkit';


const products = [
    {
        name: "Shampoo",
        img: "images/Shampoo.png",
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        link: 'INSERT:paymentlink',
        productID: 'INSERT:yourProductID0',
        featured: true
    },
    {
        name: "Conditioner",
        img: "images/Conditioner.png",
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        link: 'INSERT:paymentlink',
        productID: 'INSERT:yourProductID1',
        featured: true
    },
    {
        name: "Product3",
        img: ["images/naturalflo-product3-front.jpeg", "images/naturalflo-product3-back.jpeg"],
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        link: 'INSERT:paymentlink',
        productID: 'INSERT:yourProductID2',
        featured: false
    },
    { name: "Product4", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID3', featured: false },
    { name: "Product5", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID4', featured: false },
    { name: "Product6", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID5', featured: false },
    { name: "Product7", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID6', featured: false },
    { name: "Product8", img: "image/fake-img.png", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID7', featured: false },
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
