import React from "react";
import { useNavigate, Link } from "react-router-dom";

const FooterSection = ({ title, contents }) => {
    const navigate = useNavigate();

    const renderFooterLink = (footerLink) => {
        if (footerLink.type === 'navigate') {
            return (
                <div
                    className="cursor-pointer hover:text-gray-600"
                    onClick={() => { navigate(footerLink.link) }}
                >
                    {footerLink.title}
                </div>
            );
        } else if (footerLink.type === 'link') {
            return (
                <Link to={footerLink.link} className="hover:text-gray-600">
                    {footerLink.title}
                </Link>
            );
        } else if (footerLink.type === 'new tab') {
            return (
                <a href={footerLink.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                    {footerLink.title}
                </a>
            );
        }
    };

    return (
        <div className="text-black w-full divide-y divide-black">
            <div className="py-4">
                {title}
            </div>
            <ul className="py-4">
                {contents.map((content, index) => (
                    <li key={index}>
                        {renderFooterLink(content)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;
