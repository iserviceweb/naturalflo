import React, { useState, useRef, useEffect } from "react";
import { BiLogoEtsy } from 'react-icons/bi';
import { BsChevronDown } from "react-icons/bs";
import Links from "../../../utils/Links";

const AboutContent = ({ expandedAbout, setExpandedAbout }) => {
    const [height, setHeight] = useState('0px');
    const contentRef = useRef(null);
    const [clamp, setClamp] = useState('');

    useEffect(() => {
        setHeight(expandedAbout ? `${contentRef.current.scrollHeight}px` : '5.5em');
        setTimeout(() => setClamp(expandedAbout ? '': 'line-clamp-4'), 500);
    }, [expandedAbout]);

    return (
        <div className="w-full px-4">
            <div className="">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold playwrite">About Us</h2>
                </div>
                <div
                    ref={contentRef}
                    style={{ maxHeight: `${height}` }}
                    className={`text-xl text-gray-600 overflow-hidden transition-all duration-500 ease-in-out
                    ${expandedAbout
                            ? ' whitespace-normal'
                            : `overflow-hidden ${clamp} text-ellipsis`
                        }
                `}>
                    <p className='mb-2'>
                        Naturally Beautiful By Flo is a haircare line designed for people who want to practice self care by caring for their hair from home. Created by Florence Delgado, this haircare line is designed with natural products to help improve your hairs health by adding shine and luster, amongst other factors like hair growth. The best part about this haircare line is that it can be used on all hair types.
                    </p>
                    <div className='text-black font-bold playwrite'>How it all started</div>
                    <p>
                        Florence has always suffered from severe allergies preventing her from using commonly used haircare products. That is why Florence came up with a natural haircare line that can be used on all types of hair to help with hair growth, adding softness and shine to your hair.
                    </p>
                </div>

                {/* View */}
                <div className="inline-flex flex items-center cursor-pointer"
                    onClick={() => { setExpandedAbout(!expandedAbout) }}
                >
                    <span className="mr-1 font-bold">{expandedAbout ? 'View Less' : 'View More'}</span>
                    <BsChevronDown className={`self-center stroke-1 transition-transform ${expandedAbout ? 'rotate-180' : ''}`} />
                </div>

                <h2 className="mt-6 text-xl font-bold playwrite">Check out our Etsy</h2>
                <div className="flex">
                    <a href={Links.images.etsy} target='_blank'>
                        <BiLogoEtsy className="w-16 h-16 rounded-full outline outline-4 m-4  hover:scale-110" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default AboutContent;