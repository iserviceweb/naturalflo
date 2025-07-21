import { createSlice } from '@reduxjs/toolkit';
import Links from '../../utils/Links';


const products = [
    {
        name: "Shampoo",
        img: Links.images.shampoo,
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        link: 'INSERT:paymentlink',
        productID: 'INSERT:yourProductID0',
        featured: true
    },
    {
        name: "Conditioner",
        img: Links.images.conditioner,
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        link: 'INSERT:paymentlink',
        productID: 'INSERT:yourProductID1',
        featured: true
    },
    {
        name: "Product3",
        img: [Links.images.product3Front, Links.images.product3Back],
        price: "INSERT:price",
        description: 'Description of the product goes here.',
        link: 'INSERT:paymentlink',
        productID: 'INSERT:yourProductID2',
        featured: false
    },
    { name: "Product4", img: "", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID3', featured: false },
    { name: "Product5", img: "", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID4', featured: false },
    { name: "Product6", img: "", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID5', featured: false },
    { name: "Product7", img: "", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID6', featured: false },
    { name: "Product8", img: "", price: "INSERT:price", description: 'Description of the product goes here.', link: 'INSERT:paymentlink', productID: 'INSERT:yourProductID7', featured: false },
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
