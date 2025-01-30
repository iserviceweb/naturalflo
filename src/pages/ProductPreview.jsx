import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from "./general-components/Header";
import Footer from "./general-components/Footer";
import ProductPreviewMain from './product-preview-components/ProductPreviewMain';

const ProductPreview = () => {
    const productPreviewRef = useRef();
    const refs = {
        home: { ref: '/#home', redirect: true },
        about: { ref: '/#about', redirect: true },
        contact: { ref: '/#contact', redirect: true },
    };

    useEffect(() => {
        productPreviewRef.current.scrollIntoView({ behavior: 'auto' });
    }, []);

    return (
        <div ref={productPreviewRef} className='body'>
            <Header refs={refs} />
            <ProductPreviewMain/>
            <Footer />
        </div>
    );
};

export default ProductPreview;