import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoEtsy } from 'react-icons/bi';
import Links from "../../../utils/Links";

const SocialLinks = () => {
    return (
        <div className="text-black w-full divide-y divide-black">
            <div className="py-4">Follow Us</div>
            <ul className="py-4 text-sm">
                <li className='flex space-x-4'>
                    {/* <a href={Links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaFacebookF className="w-8 h-8" />
                    </a>
                    <a href={Links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaTwitter className="w-8 h-8" />
                    </a> */}
                    <a href={Links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaInstagram className="w-8 h-8"/>
                    </a>
                    <a href={Links.etsy} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <BiLogoEtsy className="w-8 h-8 rounded-full outline outline-2" />
                    </a>
                    {/* <a href={Links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaLinkedinIn className="w-8 h-8" />
                    </a> */}
                    {/* <a href={Links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        <FaLinkedinIn className="w-8 h-8" />
                    </a> */}
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;