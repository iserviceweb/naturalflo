import React, { useState } from 'react';
import { PiHandSoap } from "react-icons/pi";
import ProductGallery from './ProductGallery';

const DisplayProductPreview = ({ product }) => {
    const [displayedImage, setDisplayedImage] = useState(product.img);

    const renderImage = () => {
        return (
            <div>
                {displayedImage ? (
                    <img src={displayedImage} alt={product.name}
                        className="h-[18rem] md:h-[30rem] lg:w-[34rem] lg:h-[36rem] object-fit rounded-md noselect"
                    />
                ) : (
                    <div
                        className="flex items-center justify-center nf bg-eggshell h-[15rem] md:h-[25rem] lg:w-[30rem] lg:h-[40rem] object-fit rounded-md"
                    >
                        <PiHandSoap className="nf text-skyblue w-40 h-40 md:w-80 md:h-80" />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex justify-center md:justify-end">
            <div className='grid grid-cols-1 xl:flex md:ml-4'>
                <div className={`
                    ${product.getImageArray().length <= 1 ? 'justify-center hidden xl:block': ''}
                    mt-10 order-2 xl:order-1 xl:mt-0 px-10 xl:px-0 
                `}>
                    <ProductGallery
                        product={product}
                        setDisplayedImage = {setDisplayedImage}
                    />
                </div>
                <div className='order-1 xl:order-2 m-auto'>
                    {renderImage()}
                </div>
            </div>
        </div>
    );
};

export default DisplayProductPreview;