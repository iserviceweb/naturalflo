import React from 'react';
import ShowAllTestimonials from './testimonial-components/ShowAllTestimonials';

const TestimonialSection = () => {
  return (
    <div className="py-12">
      <div className="mx-auto px-10 text-center">
        <h2 className="text-3xl font-bold mb-6 playwrite">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-8">
          Hear from our satisfied customers and discover how we've helped them
          achieve success.
        </p>
        <ShowAllTestimonials/>
      </div>
    </div>
  );
};

export default TestimonialSection;