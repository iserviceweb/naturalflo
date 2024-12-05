import React from "react";
import { useSelector } from 'react-redux';

const ShowAllProducts = () => {

    const products = useSelector(state => state.product.products);

    const renderProductDetails = (product) => {
        return (
            <div className="p-4 row-span-1">
                <hr className="w-full border-gray-300" />
                <div className="flex flex-col items-center">
                    <a href="#" className="text-md font-semibold text-gray-800 hover:text-blue-500 transition">
                        {product.name}
                    </a>
                    <div className="mt-2">
                        <h6 className="text-md font-bold text-gray-800">
                            <span className="text-blue-500">$</span> {product.price}
                        </h6>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <div key={index} className="grid grid-rows-4 border rounded-lg shadow-md overflow-hidden bg-white">
                    <div className="flex row-span-3">
                        <img src={product.img} alt={product.name} className="w-full object-contain p-10 aspect-square"/>
                    </div>
                    {renderProductDetails(product)}
                </div>
            ))}
        </div>
    );
};

export default ShowAllProducts