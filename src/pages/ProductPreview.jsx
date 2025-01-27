import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { PiHandSoap } from "react-icons/pi";
import Header from "./general-components/Header";
import Footer from "./general-components/Footer";
import useProductInfo from '../hooks/useProductInfo'
import useStripeOTP from "../hooks/useStripeOTP";

const ProductPreview = () => {
    const productPreviewRef = useRef();
    const { getProductByID } = useProductInfo();
    const { oneTimePayment } = useStripeOTP();
    const location = useLocation();
    const productID = location.pathname.replace('/products/preview/', '');
    const product = getProductByID(productID)
    const refs = {
        home: { ref: '/#home', redirect: true },
        about: { ref: '/#about', redirect: true },
        contact: { ref: '/#contact', redirect: true },
    };
    const [quantity, setQuantity] = useState(1);

    const handleClick = async (event) => {
        oneTimePayment(product.priceID, 'http://localhost:5173/#' + location.pathname, quantity);
    };

    const renderSelect = () => {
        const optionLength = 30;
        const numArray = [];
        for (let i = 1; i <= optionLength; i++) {
            numArray.push(i);
        }
        return (
            <select className='p-1 border border-gray-500 bg-gray-200 rounded w-32'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            >
                {numArray.map((number) => (
                    <option key={number} value={number}>Quantity: {number}</option>
                ))}
            </select>
        );
    };

    useEffect(() => {
        productPreviewRef.current.scrollIntoView({ behavior: 'auto' });
    }, []);

    return (
        <div ref={productPreviewRef} className='body'>
            <Header refs={refs} />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10 main">
                <div className="col-span-1">
                    <div className="flex justify-center md:justify-end">
                        {product.img ? (
                            <img src={product.img} alt={product.name}
                                className="h-[15rem] md:h-[25rem] lg:w-[30rem] lg:h-[40rem] object-fit rounded-md"
                            />
                        ) : (
                            <div
                                className="flex items-center justify-center nf bg-eggshell h-[15rem] md:h-[25rem] lg:w-[30rem] lg:h-[40rem] object-fit rounded-md"
                            >
                                <PiHandSoap className="nf text-skyblue w-40 h-40 md:w-80 md:h-80" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-span-1 space-y-4 pt-5 md:pl-10">
                    <div className='flex justify-center md:justify-start'>
                        <h2 className='text-4xl font-bold'>{product.name}</h2></div>
                    <div className='flex justify-center md:justify-start'>
                        <div className='nf bg-eggshell rounded-lg p-3 mx-10 space-y-2 md:ml-0 md:mr-10'>
                            <div className='text-xl md:text-2xl'>{product.description}</div>
                            <div className='text-xl font-bold'>
                                ${product.price}
                            </div>
                            <div className='flex items-center'>
                                {renderSelect()}
                            </div>
                            <button className='p-1 nf bg-cornflower text-white rounded-full w-32'
                                onClick={handleClick}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPreview;