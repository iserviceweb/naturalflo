import React from "react";

const ProductSection = () => {
    const products = [
        { name: "Orange", img: "images/p1.png", price: "10.00" },
        { name: "Durian", img: "images/p2.png", price: "10.00" },
        { name: "Kiwi", img: "images/p3.png", price: "10.00" },
        { name: "Mango", img: "images/p4.png", price: "10.00" },
        { name: "Banana", img: "images/p5.png", price: "10.00" },
        { name: "Apple", img: "images/p6.png", price: "10.00" },
    ];

    return (
        <section className="product_section py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="heading_container text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Fruits</h2>
                    <p className="text-gray-600">
                        Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="grid grid-rows-4 border rounded-lg shadow-md overflow-hidden bg-white">
                            <div className="flex row-span-3">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full object-contain p-10 aspect-square"
                                />
                            </div>
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
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="btn-box text-center mt-10">
                    <a
                        href="#"
                        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
                    >
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
