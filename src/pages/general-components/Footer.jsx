import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FooterSection from './footer-components/FooterSection';

const Footer = () => {
    return (
        <footer className="nf bg-baja text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <img src="images/temp/naturalflo-temp-logo.png"
                        alt="NaturalFlo Logo"
                        className='h-[10rem]'
                    />
                    {/* Navigation Links */}
                    {/* <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
                            <li>
                                <a href="/#home" className="hover:text-gray-400">Home</a>
                            </li>
                            <li>
                                <a href="/#about" className="hover:text-gray-400">About</a>
                            </li>
                            <li>
                                <a href="/#services" className="hover:text-gray-400">Services</a>
                            </li>
                            <li>
                                <a href="/#contact" className="hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* Social Media Icons */}
                    {/* <div className="w-full md:w-auto text-center mb-4 md:mb-0">
                        <ul className="flex justify-center space-x-4">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaFacebookF size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaTwitter size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaInstagram size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaLinkedinIn size={20} />
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    {/* Copyright */}

                    <div className='grid grid-cols-3 gap-4 px-4 text-xl'>
                        <FooterSection className='col-span-1'
                            title='Shop'
                        />
                        <FooterSection className='col-span-1'
                            title='title1'
                        />
                        <FooterSection className='col-span-1'
                            title='title2'
                        />
                    </div>

                    {/* <div className="w-full text-center md:w-auto md:text-right">
                        <p className="text-gray-400">&copy; 2025 NaturalFlo. All rights reserved.</p>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
