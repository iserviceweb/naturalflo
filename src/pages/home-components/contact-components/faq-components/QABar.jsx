import React, { useState, useRef, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QABar = ({ question, answer, isActive, onToggle }) => {
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(isActive ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isActive]);

  return (
    <div>
      <div className='flex justify-content items-center nf bg-eggshell text-gray-600 rounded-2xl h-10 shadow-md'>
        <div className='flex p-4'>
          {question}
        </div>
        <button
          className="ml-auto p-4 cursor-pointer"
          onClick={onToggle}
        >
          <div
            className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
          >
            {isActive ? <FaMinus /> : <FaPlus />}
          </div>
        </button>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="px-4 p-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default QABar;
