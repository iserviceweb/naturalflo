import React from "react";

const OfferSection = () => {
    const offers = [
        { img: "images/o1.jpg", discount: "Up to 20% Off", style: "offer-box1" },
        { img: "images/o2.jpg", discount: "Up to 10% Off", style: "offer-box2" },
        { img: "images/o3.jpg", discount: "Up to 15% Off", style: "offer-box3" },
    ];

    return (
        <div className="grid grid-cols-12 p-4 space-x-4">
            <div className="col-span-7 mr-4 relative">
                <img
                    src={offers[0].img}
                    alt={offers[0].discount}
                    className="h-full w-full contain"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-end bg-black bg-opacity-10 text-white text-center">
                    <h2 className="text-[3.2vw] font-bold mr-4 mb-5">{offers[0].discount}</h2>
                    <a
                        href="#"
                        className="text-[1.4vw] outline outline-1 outline-white text-white py-2 px-8 mr-4 hover:text-black hover:bg-white transition duration-300"
                    >
                        Shop Now
                    </a>
                </div>
            </div>

            <div className="col-span-5 grid grid-rows-2">
                <div className="row-span-1 mb-4 relative">
                    <img
                        src={offers[1].img}
                        alt={offers[1].discount}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-10 text-white text-center">
                        <h2 className="text-[2.7vw] font-bold ml-4 mb-5">{offers[1].discount}</h2>
                        <a
                            href="#"
                            className="text-[1.4vw] outline outline-1 outline-white text-white py-2 px-8 ml-4 hover:text-black hover:bg-white transition duration-300"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className="row-span-1 mt-4 relative">
                    <img
                        src={offers[2].img}
                        alt={offers[2].discount}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-10 text-white text-center">
                        <h2 className="text-[2.7vw] font-bold ml-4 mb-5">{offers[2].discount}</h2>
                        <a
                            href="#"
                            className="text-[1.4vw] outline outline-1 outline-white text-white py-2 px-8 ml-4 hover:text-black hover:bg-white transition duration-300"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;