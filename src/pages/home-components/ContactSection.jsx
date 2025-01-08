import React, { forwardRef } from "react";
import ContactForm from "./contact-components/ContactForm";
import FAQSection from "./contact-components/FAQSection";

const ContactSection = forwardRef(({ }, ref) => {

    return (
        <div ref={ref} className="flex items-center justify-center pt-20 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-10 m-4">
                <div className="order-2 md:order-1 max-w-md p-8 space-y-6 nf bg-eggshell text-gray-600 rounded-lg shadow-md h-[28em] max-h-[28em]">
                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Contact Us
                    </h2>
                    <ContactForm />
                </div>
                <div className='order-1 mb-10 md:mb-0'>
                    <FAQSection />
                </div>
            </div>

        </div>
    );
});

export default ContactSection;
