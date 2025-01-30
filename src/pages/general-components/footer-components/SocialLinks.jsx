import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="text-black w-full divide-y divide-black">
            <div className="py-4">Follow Us</div>
            <ul className="py-4 text-sm">
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

export default SocialLinks;