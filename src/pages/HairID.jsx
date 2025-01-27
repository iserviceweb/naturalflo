import React, { useRef, useEffect } from "react";
import Header from "./general-components/Header";
import Footer from "./general-components/Footer";

const HairID = () => {
    const hairIdRef = useRef(null);

    const refs = {
        home: { ref: '/#home', redirect: true },
        about: { ref: '/#about', redirect: true },
        contact: { ref: '/#contact', redirect: true },
    };

    useEffect(() => {
        hairIdRef.current.scrollIntoView({ behavior: 'auto' });
    }, []);

    return (
        <div ref={hairIdRef} className="body">
            <Header refs={refs} />
            <div className="py-20 flex flex-col items-center main">
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="px-4 mb-8 md:mb-0 col-span-2 lg:col-span-1">
                            <img
                                src="images/temp/temp-hair.jpg"
                                alt="temp picture"
                                className="w-full h-[15rem] md:h-[25rem] lg:h-[35rem] object-cover rounded-xl mb-8"
                            />
                        </div>

                        <div className="w-full px-8 col-span-2 lg:col-span-1">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold playwrite">What is Hair ID?</h2>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-700 mb-4">
                                Hair ID is your hair identity, what color is it? Texture? What type of curl or wave patterns does it have? Is it thin or thick? Is it voluminous? These are the types of questions you have to ask yourself when trying to find the right hair products for your hair.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HairID;
