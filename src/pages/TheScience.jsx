
import React, { useRef } from "react";
import Header from "./general-components/Header";

const TheScience = () => {
    const scienceRef = useRef(null);

    const refs = {
        '/the-science': {pathname: '/the-science', hash: '', ref: scienceRef},
      };

    return (
        <div ref={scienceRef}>
            <Header refs={refs} />
            <div className="py-20 flex flex-col items-center bg-[#ebf3fa]">
                <div className="container">
                    <div className="flex flex-wrap">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="img-box">
                                <img
                                    src="images/b2.jpg"
                                    alt="Science of Fruits"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 px-4">
                            <div className="">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold">The Science of Fruits</h2>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">
                                    Fruits are nature's candy, packed with essential vitamins, minerals, and antioxidants.
                                    From the vibrant hues to the sweet flavors, every aspect of a fruit is a marvel of nature's
                                    biochemistry. Let's delve into the science behind these delightful treats.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    **The Chemistry of Color:**
                                    The vibrant colors of fruits are due to pigments like anthocyanins, carotenoids, and chlorophyll. These pigments not only enhance the fruit's appearance but also provide various health benefits.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    **The Sweet Science:**
                                    The sweetness of fruits is primarily due to the presence of fructose and glucose. These natural sugars provide energy and contribute to the overall taste experience.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    **Fiber and Health:**
                                    Fruits are excellent sources of dietary fiber, which aids in digestion and promotes gut health. Fiber also helps regulate blood sugar levels and can reduce the risk of heart disease.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheScience;