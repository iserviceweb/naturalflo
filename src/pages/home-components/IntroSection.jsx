import React from "react";
import { useNavigate } from "react-router-dom";

const IntroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center text-center">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold playwrite flex noselect">
                Flow with Nature, Glow with Confidence
              </h1>
              <p className="text-2xl text-gray-600 mt-8">
                Embrace Natural Ingredients Perfectly Suited for Your Hair.
              </p>
              <div className="btn-box mt-6 flex space-x-4 justify-center">
                <div
                  className="nf bg-baja text-white py-2 px-4 rounded hover:bg-baja-dark hover:text-gray-300 transition duration-300"
                  onClick={()=>{navigate('/#about')}}
                >
                  Read More
                </div>
                <div
                  className="nf bg-eggshell text-gray-800 py-2 px-4 rounded hover:bg-eggshell-dark transition duration-300"
                  onClick={()=>{navigate('/#contact')}}
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
