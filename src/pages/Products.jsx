import React, { useRef, useEffect } from 'react';
import { PiHandSoap } from "react-icons/pi";
import useProductInfo from '../hooks/useProductInfo'
import Header from './general-components/Header';
import Footer from './general-components/Footer';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-1 bg-gray-100 p-4 shadow-xl shadow-[#91bbd8] transform transition-all duration-300 hover:scale-105 rounded-xl">
          <div className='col-span-1 flex items-center justify-center'>
            {product.img ? (
              <Link to={'preview/'+product.productID}>
                 <img src={product.img} alt={product.name} className="h-48 object-cover rounded" />
              </Link>
            ) : (
              <div className="flex items-center justify-center w-full h-48">
                <PiHandSoap className="nf text-skyblue w-40 h-40" />
              </div>
            )}
          </div>
          <div className='mt-2 col-span-1 
                          sm:col-span-3 sm:pl-4
                          md:col-span-1 md:pl-0'>
            <hr className="w-full border-gray-300 mt-6 block sm:hidden md:block" />
            <Link to={'/products/preview/'+product.productID}
                className="text-xl font-semibold nf hover:text-cornflower transition"
            >
                {product.name}
            </Link>
            <p className="font-bold"><span className="nf text-cornflower">$</span> {product.price}</p>
            <p className="text-xl font-semibold sm:text-md md:text-lg">{product.description}</p>
          </div>
        </div>
      </div>
    )
  };

  useEffect(() => {
    productsRef.current.scrollIntoView({ behavior: 'auto' });
  }, []);

  return (
    <div ref={productsRef} className='body'>
      <Header refs={refs} redirect={true} />
      <div className="py-8 main">
        <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
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