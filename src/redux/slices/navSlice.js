import { createSlice } from '@reduxjs/toolkit';


const initialState = {
};

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
    },
});

export const {
} = navSlice.actions;

export default navSlice.reducer;
