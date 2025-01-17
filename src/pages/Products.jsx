import React, { useRef, useEffect } from 'react';
import { PiHandSoap } from "react-icons/pi";
import useProductInfo from '../hooks/useProductInfo'
import Header from './general-components/Header';
import Footer from './general-components/Footer';

const Products = () => {
  const productsRef = useRef(null);
  const { productInfo } = useProductInfo();
  const products = productInfo();
  const refs = {
    home: { ref: '/#home', redirect: true },
    about: { ref: '/#about', redirect: true },
    contact: { ref: '/#contact', redirect: true },
  };

  const renderProducts = (product, index) => {
    return (
      <div key={index} className="">
        <div className="bg-gray-100 p-6 shadow-xl shadow-[#91bbd8] transform transition-all duration-300 hover:scale-105 rounded-xl">
          {product.img ? (
            <img src={product.img} alt={product.title} className=" h-48 object-cover rounded" />
          ) : (
            <div className="flex items-center justify-center w-full h-48">
              <PiHandSoap className="nf text-skyblue w-40 h-40" />
            </div>
          )}
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="nf text-cornflower font-bold">${product.price}</p>
        </div>
      </div>
    )
  };

  useEffect(() => {
    productsRef.current.scrollIntoView({ behavior: 'auto' });
  }, []);

  return (
    <div ref={productsRef}>
      <Header refs={refs} redirect={true} />
      <div className="py-8">
        <div className="flex flex-wrap grid grid-cols-4 gap-10 p-10">
          {products.map((product, index) => (
            <div key={index} className='col-span-1'>
              {renderProducts(product, index)}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;