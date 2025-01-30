import React from 'react';
import FooterSection from './footer-components/FooterSection';
import SocialLinks from './footer-components/SocialLinks';

const Footer = () => {

    return (
        <footer className="nf bg-baja py-8">
            <div className="px-4">
                <div className="flex flex-wrap items-center justify-center w-full">

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:text-md md:text-lg lg:text-xl w-full'>
                        <div className="flex justify-center md:justify-start items-center col-span-1">
                            <img src="images/temp/naturalflo-temp-logo.png" alt="NaturalFlo Logo" className='h-[10rem] w-[15rem] object-contain' />
                        </div>
                        <div className='col-span-1 pr-10 lg:pr-5 text-nowrap'>
                            <FooterSection
                                title='Shop'
                                contents={[
                                    { title: 'Featured Products', link: '/#featured', type: 'navigate' },
                                    { title: 'All Products', link: '/products', type: 'link' },
                                ]}
                            />
                        </div>
                        <div className='col-span-1 pr-10 lg:pr-5 text-nowrap'>
                            <FooterSection
                                title='More Ways to Connect'
                                contents={[
                                    { title: 'Link 1', link: '', type: 'new tab' },
                                    { title: 'Link 2', link: '', type: 'new tab' },
                                ]}
                            />
                        </div>
                        <div className='col-span-1 pr-10 lg:pr-5 md:col-span-3 lg:col-span-1 w-full text-nowrap'>
                            <SocialLinks />
                        </div>
                    </div>

                </div>
                <div className="w-full text-center md:w-auto md:text-right flex justify-center">
                    <p className="">&copy; 2025 NaturalFlo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
