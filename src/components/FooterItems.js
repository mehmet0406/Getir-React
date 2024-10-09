import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function FooterItems({ title, items = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(prev => !prev);
        }
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="text-sm">
            <p onClick={handleToggle} className="text-primary-color text-xl cursor-pointer md:cursor-auto flex justify-between md:justify-normal">
                <span>{title}</span>
                <span><IoIosArrowDown className='md:hidden' /></span>
            </p>
            <div className={`toggletable ${isOpen ? '' : 'hidden'}  leading-8 py-4`}>
                {items && items.map((item, index) => (
                    <div key={index} className='tracking-wide'>{item}</div>
                ))}
            </div>
        </div>
    );
}
