import React, { useState } from 'react';

const ProductGallery = ({ product, setDisplayedImage }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleClick = (image, index) => {
        setDisplayedImage(image);
        setSelectedImage(index)
    };

    const renderImage = () => {
        const images = product.getImageArray();
        
        if (Array.isArray(images) && images.length > 1) {
            // if there are multiple images
            return (<>
                {images.map((image, index) =>
                    <div key={index} className={'flex-shrink-0'}>
                        <img src={image} alt={`${product.name} (${index})`}
                            className={`
                                ${selectedImage === index ? 'nf border-baja border-4 outline-offset-2' : ''}
                                h-[10rem] w-auto xl:h-auto xl:w-[8em] object-fit rounded-md noselect`}
                            onClick={() => { handleClick(image, index) }}
                        />
                    </div>
                )}
            </>);
        }
        else {
            // if is only one image
            return (
                <div className='relative'>
                    <div className='z-10 absolute inset-0 nf border-baja border-4 outline-offset-2 h-[10rem] w-auto xl:h-auto xl:w-[8em] rounded-md'></div>
                    <div className='z-1 absolute inset-0 bg-gray-600 opacity-60 h-[10rem] w-auto xl:h-auto xl:w-[8em] rounded-md'></div>
                    <img src={product.img} alt={product.name}
                        className="h-[10rem] w-auto xl:h-auto xl:w-[8em] object-fit rounded-md noselect"
                    />
                </div>
            );
        }
    };

    return (
        <div className={`
            ${product.img ? '' : 'hidden'}
            flex overflow-x-auto space-x-10 space-y-0 container
            xl:flex-col xl:justify-start xl:space-x-0 xl:space-y-10 xl:w-full xl:h-[40rem] xl:pl-0 xl:pr-8 xl:overflow-y-auto
        `}>
            {renderImage()}
        </div>
    );
};

export default ProductGallery;