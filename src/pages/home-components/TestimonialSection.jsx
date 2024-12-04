import React, { useState } from 'react';
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    title: "CEO, Acme Inc.",
    image: "https://via.placeholder.com/150", // Replace with your image link
    feedback:
      "This product has completely transformed our business. Highly recommend it to anyone looking for quality and excellence! Integer aptent libero arcu dictumst hac ultrices nulla fusce. Lobortis rutrum placerat elit consequat sociosqu non finibus ultrices? Libero bibendum pulvinar blandit blandit; facilisis primis duis? Fringilla hac massa leo sociosqu tincidunt urna. Adipiscing semper imperdiet dolor, sociosqu aliquam pretium. Enim congue eros libero nullam; platea ornare hac vulputate. Id etiam consectetur montes torquent id penatibus mollis fusce. Litora nisi tempor montes viverra hac nec natoque condimentum. Rutrum taciti urna integer euismod quam aptent consequat egestas.",
    className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Freelancer",
    image: "https://via.placeholder.com/150", // Replace with your image link
    feedback:
      "Amazing experience! The team was professional and delivered outstanding results.",
    className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
  },
  {
    id: 3,
    name: "Sarah Lee",
    title: "Marketing Manager, XYZ Corp.",
    image: "https://via.placeholder.com/150", // Replace with your image link
    feedback:
      "I've been using this service for years, and it never disappoints. The support is top-notch!",
    className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
  }, {
    id: 4,
    name: "Michael Davis",
    title: "Product Manager, ABC Tech",
    image: "https://via.placeholder.com/150", // Replace with your image link
    feedback:
      "Incredible service! This platform made our workflow more efficient and streamlined. The features are well thought out, and the user interface is intuitive. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et risus ipsum. Phasellus posuere nunc et neque maximus, id iaculis turpis fermentum. Cras ac ante vitae ante vehicula cursus at et tortor.",
    className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
  },
  {
    id: 5,
    name: "Emily Turner",
    title: "UX Designer",
    image: "https://via.placeholder.com/150", // Replace with your image link
    feedback:
      "The customer service is exceptional, always responsive and willing to help. Their platform has made my projects easier to manage and scale. Nulla euismod lectus nec nisi bibendum, in vulputate nisi tincidunt. Aliquam erat volutpat. Cras vehicula enim nec orci cursus, ut efficitur purus ultricies. Donec fringilla nisi ut neque mollis viverra.",
    className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
  },
  {
    id: 6,
    name: "David Clark",
    title: "Entrepreneur",
    image: "https://via.placeholder.com/150", // Replace with your image link
    feedback:
      "I highly recommend this service for anyone looking to elevate their business. The level of professionalism and results speak for themselves. Vivamus a sapien et purus tincidunt fermentum non non elit. Curabitur nec convallis elit. Integer viverra elit neque, nec tincidunt odio vulputate sit amet. Donec finibus, libero vitae euismod facilisis, ex neque accumsan ligula, ac convallis ipsum tortor eu arcu.",
    className: "col-span-1 bg-white shadow-md rounded-lg p-6 text-left m-4",
  },
];

const renderAllTestimonials = () => {


const [expandedTestimonials, setExpandedTestimonials] = useState({});

const toggleExpand = (id) => {
  console.log(id);
  
  setExpandedTestimonials((prev) => ({
    ...prev,
    [id]: !prev[id], // Toggle the expanded state for the clicked testimonial
  }));
};

const renderTestimonials = (parity) => {
  const conditions = { "odd": 1, "even": 0, "null": "null" };
  const isNull = parity === 'null';
  return (
    <>
      {testimonials.map((testimonial) => (isNull || testimonial.id % 2 === conditions[parity]) && (
        <div key={testimonial.id} className={testimonial.className}>
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>
          <p
            className={`text-gray-700 italic overflow-hidden
              lg:max-h-none lg:whitespace-normal
              ${expandedTestimonials[testimonial.id]
                ? 'max-h-none overflow-visible whitespace-normal'
                : 'max-h-[3em] overflow-hidden whitespace-nowrap text-ellipsis'} 
              `}>
            "{testimonial.feedback}"
          </p>
          <div className="text-blue-500 flex items-center lg:hidden"
            onClick={() => {toggleExpand(testimonial.id)}}
          >
            <span className="mr-1 font-bold">{expandedTestimonials[testimonial.id] ? 'View Less' : 'View More'}</span>
            <BsChevronDown className={`self-center stroke-1 transition-transform ${expandedTestimonials[testimonial.id] ? 'rotate-180' : ''}`} />
          </div>
        </div>
      ))
      }
    </>
  );
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

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="mx-auto px-10 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-8">
          Hear from our satisfied customers and discover how we've helped them
          achieve success.
        </p>
        {renderAllTestimonials()}
      </div>
    </section>
  );
};

export default TestimonialSection;