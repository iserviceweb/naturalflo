import React from "react";
import { useSelector } from 'react-redux';

const DisplayFAQs = ({onOpen}) => {

    const FAQs = useSelector(state => state.faq);
    console.log(FAQs);
    
    return (
        <div>

        </div>
    )
};

export default DisplayFAQs