import { createSlice } from '@reduxjs/toolkit';
import Links from '../../utils/Links';


const products = [
    { name: "Shampoo", img: Links.shampoo, price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: true},
    { name: "Conditioner", img: Links.conditioner, price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: true },
    { name: "Product3", img: [Links.product3Front, Links.product3Back], price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: false },
    { name: "Product4", img: "", price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: false },
    { name: "Product5", img: "", price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: false },
    { name: "Product6", img: "", price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: false },
    { name: "Product7", img: "", price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: false },
    { name: "Product8", img: "", price: "XX.00", description: 'Description of the product goes here.', link: Links.etsy, featured: false },
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
