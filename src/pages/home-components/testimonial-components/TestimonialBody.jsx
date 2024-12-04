import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";

const TestimonialBody = ({ testimonial }) => {
    const { id, feedback } = testimonial;
    const [expandedTestimonials, setExpandedTestimonials] = useState({});

    const toggleExpand = (id) => {
  
      setExpandedTestimonials((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    return (<>
        <p
            className={`text-gray-700 italic overflow-hidden
                lg:max-h-none lg:whitespace-normal
                ${expandedTestimonials[id]
                    ? 'max-h-none overflow-visible whitespace-normal'
                    : 'max-h-[3em] overflow-hidden whitespace-nowrap text-ellipsis'} 
            `}>
            "{feedback}"
        </p>
        <div className="inline-flex text-blue-500 flex items-center lg:hidden"
            onClick={() => { toggleExpand(id) }}
        >
            <span className="mr-1 font-bold">{expandedTestimonials[id] ? 'View Less' : 'View More'}</span>
            <BsChevronDown className={`self-center stroke-1 transition-transform ${expandedTestimonials[id] ? 'rotate-180' : ''}`} />
        </div>
    </>)
};

export default TestimonialBody;