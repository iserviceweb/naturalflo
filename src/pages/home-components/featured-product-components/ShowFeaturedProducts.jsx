import React from "react";
import { PiHandSoap } from "react-icons/pi";
import useProductInfo from '../../../hooks/useProductInfo'
import { Link } from "react-router-dom";

const ShowFeaturedProducts = () => {

    const { productInfo } = useProductInfo();
    const products = productInfo();

    const renderProductDetails = (product) => {
        return (
            <div className="p-4 row-span-1">
                <hr className="w-full border-gray-300" />
                <div className="flex flex-col items-center">
                    {/* <a href={product.link} target="_blank" className="text-md font-semibold text-gray-800 nf hover:text-cornflower transition">
                        {product.name}
                    </a> */}
                    <Link to={'/products/preview/'+product.productID}
                        className="text-md font-semibold text-gray-800 nf hover:text-cornflower transition"
                    >
                        {product.name}
                    </Link>
                    <div className="mt-2">
                        <h6 className="text-md font-bold">
                            <span className="nf text-cornflower">$</span> {product.price}
                        </h6>
                    </div>
                </div>
            </div>
        );
    };

    const renderImage = (product) => {
        return (
            <div className="w-full h-full p-10">{product.img ? (
                // <a href={product.link} target="_blank">
                //     <img src={product.img} alt={product.name} className="h-48 rounded-2xl object-cover" />
                // </a>
                <Link to={'/products/preview/'+product.productID}>
                    <img src={product.img} alt={product.name} className="h-48 object-cover rounded" />
                </Link>
            ) : (
                <a href={product.link} target="_blank" className="flex items-center justify-center w-full h-full">
                    <PiHandSoap className="nf text-skyblue w-40 h-40" />
                </a>
            )}</div>
        );
    }

    const renderProduct = (product, index) => {
        if (product.featured) {
            return (
                <div key={index} className="grid grid-rows-4 rounded-lg shadow-md overflow-hidden nf bg-eggshell">
                    <div className="flex row-span-3">
                        {renderImage(product)}
                    </div>
                    {renderProductDetails(product)}
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[40em]">
                {products.map((product, index) => (
                    renderProduct(product, index)
                ))}
            </div>
        </div>
    );
};

export default ShowFeaturedProducts;