import { createSlice } from '@reduxjs/toolkit';

const qna = [
    { question:"Sample text for question 1?", answer: "Vivamus a sapien et purus tincidunt Answer 1 fermentum non non elit. Curabitur nec convallis elit. Integer viverra elit neque, nec tincidunt odio vulputate sit amet. Donec finibus, libero vitae euismod facilisis, ex neque accumsan ligula, ac convallis ipsum tortor eu arcu." },
    { question:"Sample text for question 2?", answer: "Vivamus a Answer 2 sapien et purus tincidunt fermentum non non elit."},
    { question:"Sample text for question 3?", answer: "Answer 3"},
    { question:"Sample text for question 4?", answer: "Answer 4"},
];

const initialState = {
    qna: qna
};

const FAQSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
    },
});

export const {
} = FAQSlice.actions;

export default FAQSlice.reducer;
