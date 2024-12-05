import React from 'react';
import { useSelector } from 'react-redux';
import TestimonialHeader from './TestimonialHeader';
import TestimonialBody from './TestimonialBody';



const ShowAllTestimonials = () => {

    const testimonials = useSelector(state => state.testimonial.testimonials);

    const renderTestimonials = (parity) => {
        const conditions = { "odd": 1, "even": 0, "null": "null" };
        const isNull = parity === 'null';
        return (<>
            {testimonials.map((testimonial) =>
                (isNull || testimonial.id % 2 === conditions[parity]) && (
                    <div key={testimonial.id} className={testimonial.className}>
                        <TestimonialHeader testimonial={testimonial} />
                        <TestimonialBody testimonial={testimonial} />
                    </div>
                ))
            }
        </>);
    };

    return (
        <div className="grid grid-cols-2">
            <div className="hidden md:block">
                {renderTestimonials('odd')}
            </div>
            <div className="hidden md:block">
                {renderTestimonials('even')}
            </div>
            <div className="col-span-2 block md:hidden">
                {renderTestimonials('null')}
            </div>
        </div>
    )
};

export default ShowAllTestimonials;