import React from 'react';
import DisplayFAQs from './faq-components/DisplayFAQs';

const FAQSection = () => {

  return (
    <div className="flex flex-col max-w-[27em]">
      <div className="grid grid-cols-1">
            <div className="mb-6 mt-2">
              <h2 className="text-3xl font-bold text-black playwrite">Frequently Asked Question</h2>
            </div>
            <DisplayFAQs/>
      </div>
    </div>
  );
};

export default FAQSection;