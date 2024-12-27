import React, {useState} from 'react';
import QABar from './faq-components/QABar';
import DisplayFAQs from './faq-components/DisplayFAQs';

const FAQSection = () => {
  
  const [currentBar, setCurrentBar] = useState();

  const manageBars = (bar) => {
    setCurrentBar(bar);
    
  };

  return (
    <div className="flex flex-col w-[25em]">
      <div className="grid grid-cols-1 mx-2">
            <div className="mb-6 mt-2">
              <h2 className="text-3xl font-bold text-black">Frequently Asked Question</h2>
            </div>
            <QABar
              question = "Sample text for question 1?"
              answer = "Vivamus a sapien et purus tincidunt Answer 1 fermentum non non elit. Curabitur nec convallis elit. Integer viverra elit neque, nec tincidunt odio vulputate sit amet. Donec finibus, libero vitae euismod facilisis, ex neque accumsan ligula, ac convallis ipsum tortor eu arcu."
              onOpen = {manageBars}
              />
            <QABar
              question = "Sample text for question 2?" 
              answer = "Vivamus a Answer 2 sapien et purus tincidunt fermentum non non elit."
              onOpen = {manageBars}
            />
            <QABar question = "Sample text for question 3?" answer = "Answer 3" onOpen = {manageBars}/>
            <QABar question = "Sample text for question 4?" answer = "Answer 4" onOpen = {manageBars}/>
            {/* <DisplayFAQs onOpen={manageBars}/> */}
      </div>
    </div>
  );
};

export default FAQSection;