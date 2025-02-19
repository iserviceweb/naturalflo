import React from 'react';
import { useLocation } from "react-router-dom";
import useProductInfo from '../../hooks/useProductInfo';
import DisplayProductPreview from './preview-main-components/DisplayProductPreview';

const ProductPreviewMain = () => {
    const { getProductByID } = useProductInfo();
    const location = useLocation();
    const productID = location.pathname.replace('/products/preview/', '');
    const product = getProductByID(productID)

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

                        <div className='py-1.5 px-8 nf bg-cornflower text-white rounded-full w-32'>
                        <a href={product.link}>
                            Buy Now
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPreviewMain;