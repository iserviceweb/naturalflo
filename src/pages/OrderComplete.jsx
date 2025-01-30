import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./general-components/Header";
import { TbShoppingBagCheck } from "react-icons/tb";

const OrderComplete = () => {
    const navigate = useNavigate();
    const refs = {
        home: { ref: '/#home', redirect: true },
        about: { ref: '/#about', redirect: true },
        contact: { ref: '/#contact', redirect: true },
    };

    const handleClick = async (event) => {
        navigate('/products')
    };

    return (
        <div className="body">
            <Header refs={refs}/>
            <div className="flex flex-col justify-center items-center h-screen space-y-10 main">
                <h1 className="font-bold text-4xl px-4 text-center">Thank You for Shopping With Us!</h1>
                <div>
                    <TbShoppingBagCheck className="w-40 h-40" />
                </div>
                <button className="nf bg-baja text-white py-2 px-4 rounded hover:bg-baja-dark hover:text-gray-300 transition duration-300"
                    onClick={handleClick}
                >
                    Go Back to Products Page
                </button>
            </div>
        </div>
    );
};

export default OrderComplete;