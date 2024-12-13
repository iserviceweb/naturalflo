import React from "react";

const OfferSection = () => {
    const offers = [
        { img: "images/temp/o1.jpg", discount: "Up to 20% Off", style: "offer-box1" },
        { img: "images/temp/o2.jpg", discount: "Up to 10% Off", style: "offer-box2" },
        { img: "images/temp/o3.jpg", discount: "Up to 15% Off", style: "offer-box3" },
    ];

    const RenderOffer = ({style, img, discount, Shadow, linkA}) => {
        return (
            <div className={style}>
                {img}
                {<Shadow>
                    {discount}
                    {linkA}
                </Shadow>}
            </div>
        );
    }

    const renderDivWrapper = (style) => {
        return ({ children }) =>
            <div className={style}>
                {children}
            </div>
    }

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-12 p-4 md:space-x-4 w-full max-w-screen-xl">
                <RenderOffer
                    style = "col-span-12 md:col-span-7 relative"
                    img = {<img src={offers[0].img} alt="" className="w-full max-w-[44em] h-full" />}
                    discount = {<h2 className="text-[1em] md:text-[2.5em] font-bold mr-4 mb-5">{offers[0].discount}</h2>}
                    Shadow = {renderDivWrapper("absolute inset-0 flex flex-col justify-center items-end bg-black bg-opacity-10 text-white text-center w-full max-w-[44em]")}
                    linkA = {
                        <a href="#" className="text-sm md:text-md lg:text-lg xl:text-2xl outline outline-1 outline-white text-white py-2 px-8 mr-4 hover:text-black hover:nf bg-eggshell transition duration-300">
                            Shop Now
                        </a>
                    }
                />
                <div className="col-span-12 md:col-span-5 grid grid-cols-1 mt-8 md:mt-0">
                    <RenderOffer
                        style = "relative"
                        discount = {<h2 className="text-[1em] md:text-[2em] font-bold ml-4 mb-5">{offers[1].discount}</h2>}
                        img = {<img src={offers[1].img} alt="" className="w-full md:max-w-[32em] object-cover mb-4" />}
                        Shadow = {renderDivWrapper("absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-10 text-white text-center w-full md:max-w-[32em] mb-4")}
                        linkA = {
                            <a href="#" className="text-sm md:text-md lg:text-lg xl:text-2xl outline outline-1 outline-white text-white py-2 px-8 ml-4 hover:text-black hover:nf bg-eggshell transition duration-300">
                                Shop Now
                            </a>
                        }
                    />
                    <RenderOffer
                        style = "relative"
                        discount = {<h2 className="text-[1em] md:text-[2em] font-bold ml-4 mb-5">{offers[2].discount}</h2>}
                        img = {<img src={offers[2].img} alt="" className="w-full md:max-w-[32em] object-cover mt-4" />}
                        Shadow = {renderDivWrapper("absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-10 text-white text-center w-full md:max-w-[32em] mt-4")}
                        linkA = {
                            <a href="#" className="text-sm md:text-md lg:text-lg xl:text-2xl outline outline-1 outline-white text-white py-2 px-8 ml-4 hover:text-black hover:nf bg-eggshell transition duration-300">
                                Shop Now
                            </a>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default OfferSection;