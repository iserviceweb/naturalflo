import React, { forwardRef } from "react";
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm("", "", e.target, {
            publicKey: "",
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );

    e.target.reset();
};

const ContactForm = () => {
    const InputBox = ({ title, label, type, placeholder, rows }) => {
        const TypeBox = () => {
            if (type === 'textbox') {
                return (
                    <textarea
                        name={title}
                        id={title}
                        rows={rows}
                        required
                        placeholder={placeholder}
                        className="block w-full mt-1 p-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none scroll-y"
                        onKeyDown={(e) => { if (e.key === 'enter') e.preventDefault() }}
                    ></textarea>
                )
            } else {
                return (
                    <input
                        type={type}
                        name={title}
                        id={title}
                        required
                        placeholder={placeholder}
                        className="block w-full mt-1 p-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                )
            }
        }
        return (
            <div>
                <label
                    htmlFor={placeholder}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
                <TypeBox />
            </div>
        );
    };

    return (
        <form className="space-y-4" onSubmit={sendEmail}>
            <InputBox
                title="name"
                label="Your Name"
                type="text"
                placeholder="John Doe"
            />
            <InputBox
                title="email"
                label="Your Email"
                type="email"
                placeholder="example@domain.com"
            />
            <InputBox
                title="message"
                label="Your Message"
                type="textbox"
                rows="4"
                placeholder="Write your message here..."
            />

            <div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
