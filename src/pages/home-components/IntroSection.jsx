import React from "react";

const IntroSection = () => {
  return (
    <section className="slider_section py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div>
              <h1 className="text-4xl font-bold leading-tight">
                We Sell The <br />
                Best Fruits
              </h1>
              <p className="nf text-taupe-light mt-4">
                Anything embarrassing hidden in the middle of text. All the Lorem Ipsum. Anything embarrassing hidden in the middle of text. All the Lorem Ipsum.
              </p>
              <div className="btn-box mt-6 flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Read More
                </a>
                <a
                  href="#"
                  className="bg-gray-100 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-7/12">
            <div className="img-box">
              <img
                src="images/temp/slider-img.png"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
