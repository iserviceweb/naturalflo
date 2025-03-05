import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoEtsy } from 'react-icons/bi';

const SocialLinks = () => {
    return (
        <div className="text-black w-full divide-y divide-black">
            <div className="py-4">Follow Us</div>
            <ul className="py-4 text-sm">
                <li className='flex space-x-4'>
                    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaFacebookF className="w-8 h-8" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaTwitter className="w-8 h-8" />
                    </a> */}
                    <a href="https://www.instagram.com/naturalflo___/?igsh=OTl4Zm1hNnh6cGlo&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaInstagram className="w-8 h-8"/>
                    </a>
                    <a href="https://www.etsy.com/people/6awjsqitqd5cqdj3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <BiLogoEtsy className="w-8 h-8 rounded-full outline outline-2" />
                    </a>
                    {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaLinkedinIn className="w-8 h-8" />
                    </a> */}
                    {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaLinkedinIn className="w-8 h-8" />
                    </a> */}
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;