import React, { forwardRef } from "react";
import ContactForm from "./contact-components/ContactForm";
import FAQSection from "./contact-components/FAQSection";

const ContactSection = forwardRef(({ }, ref) => {

    return (
        <div className="flex items-center justify-center pb-20">
            <div ref={ref} className="grid grid-cols-2 space-x-10">
                <div className="max-w-md p-8 space-y-6 nf bg-eggshell text-gray-600 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Contact Us
                    </h2>
                    <ContactForm />
                </div>
                <div>
                <FAQSection/></div>
            </div>
        </div>
    );
});

export default ContactSection;
