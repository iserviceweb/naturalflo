
import React, { useRef } from "react";
import Header from "./general-components/Header";

const HairID = () => {

    const refs = {
        'home': '/#home',
        'about': '/#about',
        'contact': '/#contact',
    };

    return (
        <div>
            <Header refs={refs} redirect={true} />
            <div className="py-20 flex flex-col items-center">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="img-box">
                                <img
                                    src="images/temp/temp-hair.jpg"
                                    alt="temp picture"
                                    className="w-full h-[35rem] object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <div className="">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold playwrite">What is Hair ID?</h2>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">
                                    Hair ID is your hair identity, what color is it? Texture? What type of curl or wave patterns does it have? Is it thin or thick? Is it voluminous? These are the types of questions you have to ask yourself when trying to find the right hair products for your hair.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    Hair ID is your hair identity, what color is it? Texture? What type of curl or wave patterns does it have? Is it thin or thick? Is it voluminous? These are the types of questions you have to ask yourself when trying to find the right hair products for your hair.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    Hair ID is your hair identity, what color is it? Texture? What type of curl or wave patterns does it have? Is it thin or thick? Is it voluminous? These are the types of questions you have to ask yourself when trying to find the right hair products for your hair.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    Hair ID is your hair identity, what color is it? Texture? What type of curl or wave patterns does it have? Is it thin or thick? Is it voluminous? These are the types of questions you have to ask yourself when trying to find the right hair products for your hair.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HairID;