import React from "react";
import ShowAllDisplayedProducts from "./product-components/ShowAllDisplayedProducts";

const DisplayedProductSection = () => {

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 playwrite">Our Products</h2>
                    <p className="text-gray-600">
                        Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an.
                    </p>
                </div>

                {/* Product Grid */}
                <ShowAllDisplayedProducts />

                {/* View All Button */}
                {/* <div className="btn-box text-center mt-10">
                    <a href="#" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                        View All
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default DisplayedProductSection;
