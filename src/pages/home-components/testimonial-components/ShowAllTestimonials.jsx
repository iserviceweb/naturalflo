import React from 'react';
import TestimonialHeader from './TestimonialHeader';
import TestimonialBody from './TestimonialBody';



const ShowAllTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Jane Doe",
            title: "CEO, Acme Inc.",
            // image: "https://via.placeholder.com/150",
            feedback:
                "This product has completely transformed our business. Highly recommend it to anyone looking for quality and excellence! Integer aptent libero arcu dictumst hac ultrices nulla fusce. Lobortis rutrum placerat elit consequat sociosqu non finibus ultrices? Libero bibendum pulvinar blandit blandit; facilisis primis duis? Fringilla hac massa leo sociosqu tincidunt urna. Adipiscing semper imperdiet dolor, sociosqu aliquam pretium. Enim congue eros libero nullam; platea ornare hac vulputate. Id etiam consectetur montes torquent id penatibus mollis fusce. Litora nisi tempor montes viverra hac nec natoque condimentum. Rutrum taciti urna integer euismod quam aptent consequat egestas.",
            className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
        },
        {
            id: 2,
            name: "John Smith",
            title: "Freelancer",
            // image: "https://via.placeholder.com/150",
            feedback:
                "Amazing experience! The team was professional and delivered outstanding results.",
            className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
        },
        {
            id: 3,
            name: "Sarah Lee",
            title: "Marketing Manager, XYZ Corp.",
            // image: "https://via.placeholder.com/150",
            feedback:
                "I've been using this service for years, and it never disappoints. The support is top-notch!",
            className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
        }, {
            id: 4,
            name: "Michael Davis",
            title: "Product Manager, ABC Tech",
            // image: "https://via.placeholder.com/150",
            feedback:
                "Incredible service! This platform made our workflow more efficient and streamlined. The features are well thought out, and the user interface is intuitive. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et risus ipsum. Phasellus posuere nunc et neque maximus, id iaculis turpis fermentum. Cras ac ante vitae ante vehicula cursus at et tortor.",
            className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
        },
        {
            id: 5,
            name: "Emily Turner",
            title: "UX Designer",
            // image: "https://via.placeholder.com/150",
            feedback:
                "The customer service is exceptional, always responsive and willing to help. Their platform has made my projects easier to manage and scale. Nulla euismod lectus nec nisi bibendum, in vulputate nisi tincidunt. Aliquam erat volutpat. Cras vehicula enim nec orci cursus, ut efficitur purus ultricies. Donec fringilla nisi ut neque mollis viverra.",
            className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
        },
        {
            id: 6,
            name: "David Clark",
            title: "Entrepreneur",
            // image: "https://via.placeholder.com/150",
            feedback:
                "I highly recommend this service for anyone looking to elevate their business. The level of professionalism and results speak for themselves. Vivamus a sapien et purus tincidunt fermentum non non elit. Curabitur nec convallis elit. Integer viverra elit neque, nec tincidunt odio vulputate sit amet. Donec finibus, libero vitae euismod facilisis, ex neque accumsan ligula, ac convallis ipsum tortor eu arcu.",
            className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
        },
    ];

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