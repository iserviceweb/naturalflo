import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QABar from './QABar';

const DisplayFAQs = () => {


    const FAQs = useSelector(state => state.faq.qna);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="space-y-2">
            {FAQs.map((qna, index) => (
                <div key={index}>
                    <QABar
                        question={qna.question}
                        answer={qna.answer}
                        isActive={index === activeIndex}
                        onToggle={() => handleToggle(index)}
                    />
                </div>
            ))}
        </div>
    );
};

export default DisplayFAQs;
