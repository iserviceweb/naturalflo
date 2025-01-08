import React from "react";
import { useNavigate, Link } from "react-router-dom";


const test = [
    { title: 'test about', link: '/#about', type: 'navigate' },
    { title: 'test hair', link: '/hair-id', type: 'link' },
    { title: 'test google', link: 'https://google.com', type: 'new tab' },
]


const FooterSection = ({ title }) => {
    const navigate = useNavigate();

    const renderFooterLink = (footerLink) => {
        if (footerLink.type === 'navigate') {
            return (
                <div
                    className="cursor-pointer"
                    onClick={() => { navigate(footerLink.link) }}
                >
                    {footerLink.title}
                </div>
            );
        } else if (footerLink.type === 'link') {
            return (
                <Link to={footerLink.link}>
                    {footerLink.title}
                </Link>
            );
        } else if (footerLink.type === 'new tab') {
            return (
                <a href={footerLink.link} target="_blank" rel="noopener noreferrer">
                    {footerLink.title}
                </a>
            );
        }
    };

    return (
        <div className="text-black w-full divide-y divide-black">
            <div className="py-4 pr-40">
                {title}
            </div>
            <ul className="py-4">
                {test.map((t) => (
                    <li>
                        {renderFooterLink(t)}
                    </li>
                ))}
                {/* <li>content1</li> */}
                {/* <li>content2</li> */}
                {/* <li>content2</li> */}
            </ul>
        </div>
    );
};

export default FooterSection;
