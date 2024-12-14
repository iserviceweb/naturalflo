import React from "react";
import { useSelector } from 'react-redux';
import { PiHandSoap } from "react-icons/pi";

const ShowAllDisplayedProducts = () => {

    const products = useSelector(state => state.product.products);

    const renderProductDetails = (product) => {
        return (
            <div className="p-4 row-span-1">
                <hr className="w-full border-gray-300" />
                <div className="flex flex-col items-center">
                    <a href="#" className="text-md font-semibold text-gray-800 nf hover:text-olive transition">
                        {product.name}
                    </a>
                    <div className="mt-2">
                        <h6 className="text-md font-bold text-gray-800">
                            <span className="nf text-olive">$</span> {product.price}
                        </h6>
                    </div>
                </div>
            </div>
        );
    };

    const renderImage = (product) => {
        return (
            <div className="w-full h-full">{product.img ? (
                <img src={product.img} alt={product.name} className="w-full object-contain p-10 aspect-square" />
            ) : (
                <div className="flex items-center justify-center w-full h-full">
                    <PiHandSoap className="nf text-olive w-40 h-40" />
                </div>
            )}</div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[40em]">
                {products.map((product, index) => (
                    <div key={index} className="grid grid-rows-4 rounded-lg shadow-md overflow-hidden nf bg-eggshell">
                        <div className="flex row-span-3">
                            {renderImage(product)}
                        </div>
                        {renderProductDetails(product)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowAllDisplayedProducts