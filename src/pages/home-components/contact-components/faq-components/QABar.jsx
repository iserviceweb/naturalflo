import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QABar = ({ question, answer, onOpen }) => {
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => {
        onOpen();
        setIsHidden(!isHidden);
    };

    const RenderAnswer = () => {
        return (
            <div>
                {!isHidden && (
                    <div className='p-2'>
                        {answer}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className='my-1.5'>
            <div className='flex justify-content items-center nf bg-eggshell text-gray-600 rounded-2xl h-10 shadow-md'>
                <div className='flex p-4'>
                    {question}
                </div>
                <div
                    className="ml-auto p-4 cursor-pointer"
                    onClick={handleClick}
                >
                    <div
                        className={`transform transition-transform duration-300 ${isHidden ? 'rotate-0' : 'rotate-180'
                            }`}
                    >
                        {isHidden ? <FaPlus /> : <FaMinus />}
                    </div>
                </div>
            </div>
            <RenderAnswer/>
        </div>
    );
}

export default QABar;