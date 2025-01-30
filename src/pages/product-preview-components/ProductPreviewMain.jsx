import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { PiHandSoap } from "react-icons/pi";
import useProductInfo from '../../hooks/useProductInfo';
import useStripeOTP from "../../hooks/useStripeOTP";
import DisplayProductPreview from './preview-main-components/DisplayProductPreview';

const ProductPreviewMain = () => {
    const { getProductByID } = useProductInfo();
    const { oneTimePayment } = useStripeOTP();
    const location = useLocation();
    const productID = location.pathname.replace('/products/preview/', '');
    const product = getProductByID(productID)
    const [quantity, setQuantity] = useState(1);
    const siteUrl = 'http://localhost:5173'

    //change localhost 
    const handleClick = async (event) => {
        oneTimePayment(product.priceID, siteUrl + location.pathname, quantity);
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

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 main">
            <div className="col-span-1">
                <DisplayProductPreview
                    product = {product}
                />
            </div>
            <div className="col-span-1 space-y-4 pt-5 md:pl-10">
                <div className='flex justify-center md:justify-start'>
                    <h2 className='text-4xl font-bold'>{product.name}</h2>
                </div>
                <div className='flex justify-center md:justify-start'>
                    <div className='nf bg-eggshell rounded-lg p-3 mx-10 md:ml-0 md:mr-10 space-y-2 w-full'>

                        <div className='text-xl md:text-2xl'>{product.description}</div>
                        <div className='text-xl font-bold'> ${product.price}</div>
                        <div className='flex items-center'> {renderSelect()}</div>

                        <button
                            className='p-1 nf bg-cornflower text-white rounded-full w-32'
                            onClick={handleClick}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPreviewMain;