import React from "react";

const AboutSection = () => {
  return (
    <div className="py-20 flex flex-col items-center bg-[#ebf3fa]">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="img-box">
              <img
                src="images/about-img.png"
                alt="About Us"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4">
            <div className="">
              <div className="mb-6">
                <h2 className="text-3xl font-bold">About Us</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrassing hidden in the middle of text. All the
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;