import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const NewsLetterSection = () => {
    return (
        <div className="text-black w-full divide-y divide-black">
            <div className="py-4 pr-40 lg:mb-7"></div>
            <ul className="py-4 text-sm">
                <li>Sign up to our newsletter to receive 10% off your first order </li>
                <li className='py-4'>
                    <input type="email"
                        placeholder='Please enter your email'
                        className='p-4 rounded-full h-10 w-full focus:outline-none border border-black nf bg-baja placeholder-black'
                    />
                </li>
                <li className='flex space-x-4'>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaLinkedinIn size={20} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NewsLetterSection;