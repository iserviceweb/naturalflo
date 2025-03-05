import React, { useState, forwardRef } from 'react';
import { BiLogoEtsy } from 'react-icons/bi';
import { BsChevronDown } from "react-icons/bs";
import AboutContent from './about-components/AboutContent';

const AboutSection = forwardRef(({ }, ref) => {
  const [expandedAbout, setExpandedAbout] = useState(false);

  return (
    <div ref={ref} className="py-20 flex flex-col items-center">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Image Section */}
          <div className='grid grid-cols-2 md:grid-cols-2'>
            <div className={`w-full mb-8 md:mb-0 px-4
              ${expandedAbout ? 'px-20 col-span-2 lg:px-4 lg:col-span-1' : 'col-span-2 md:col-span-1'}
            `}>
              <div className="img-box">
                <img
                  src="images/temp/about-temp.png"
                  alt="About Us"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className={`px-4 ${expandedAbout ? 'mt-6 lg:mt-0 col-span-2 lg:col-span-1' : 'col-span-2 md:col-span-1'}`}>
              <AboutContent
                expandedAbout={expandedAbout}
                setExpandedAbout={setExpandedAbout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutSection;