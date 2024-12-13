import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ refs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSmoothScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(()=>{
    const link = refs[location.pathname+location.hash];
    if(link){
      handleSmoothScroll(link.ref);
    };
  }, [location]);
  

  return (
    <div className="relative sticky top-0 nf bg-baja z-50">
      <header>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between uppercase">
            <button className="text-2xl font-bold"
              onClick={()=>{navigate('/')}}
            >
              <span>NaturalFlo</span>
            </button>
            <button
              className="block md:hidden focus:outline-none"
              type="button"
            >
              <span className="block w-6 h-1 bg-black my-1"></span>
              <span className="block w-6 h-1 bg-black my-1"></span>
              <span className="block w-6 h-1 bg-black my-1"></span>
            </button>
            <div className="hidden md:flex p-5">
              <ul className="flex space-x-10">
                <li className="">
                  <button className={"p-1 rounded-md nf hover:text-olive uppercase underline underline-offset-4"}
                    onClick={() => {navigate('/')}}
                  >
                    Home
                  </button>
                </li>
                <li className="">
                <button className={"p-1 rounded-md nf hover:text-olive uppercase underline underline-offset-4"}
                    onClick={() => { navigate('/#about') }}
                  >
                    About
                  </button>
                </li>
                <li className="">
                <button className={"p-1 rounded-md nf hover:text-olive uppercase underline underline-offset-4"}
                    onClick={() => { navigate('/#contact') }}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* Header Section Ends */}
    </div>
  );
};

export default Header;