import React from "react";

const LoadingPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen nf bg-skyblue">
            <div className="relative">
                <img 
                    src="/images/temp/naturalflo-temp-logo.png" 
                    alt="Loading" 
                    className="animate-pulse opacity-70"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
