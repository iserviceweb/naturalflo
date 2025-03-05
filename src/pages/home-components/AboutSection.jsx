import React, { forwardRef } from 'react';
import { BiLogoEtsy } from 'react-icons/bi';

const AboutSection = forwardRef(({}, ref) => {
  return (
    <div ref={ref} className="py-20 flex flex-col items-center">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="img-box">
              <img
                src="images/temp/about-temp.png"
                alt="About Us"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4">
            <div className="">
              <div className="mb-6">
                <h2 className="text-3xl font-bold playwrite">About Us</h2>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrassing hidden in the middle of text. All the
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks.
              </p>
              <h2 className="text-xl font-bold playwrite">Check out our Etsy</h2>
              <div className="flex">
                <a href="https://www.etsy.com/people/6awjsqitqd5cqdj3" target='_blank'>
                  <BiLogoEtsy className="w-16 h-16 rounded-full outline outline-4 m-4  hover:scale-110"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutSection;