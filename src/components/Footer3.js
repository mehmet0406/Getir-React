import React, { useState,useEffect } from 'react';
import {IoIosArrowDown} from "react-icons/io"
export default function Footer2() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        if (window.innerWidth > 768) {
            return;
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className="grid gap-y-4 text-sm">
                <p  onClick={handleToggle} className="text-primary-color text-xl cursor-pointer md:cursor-auto flex justify-between md:justify-normal"><span>Yardıma mı ihtiyacınız var?</span><span><IoIosArrowDown className='md:hidden'/></span></p>
                <div className={`toggletable ${isOpen ? 'hidden' : ''} grid gap-3`} >
                    <div >Sıkça Sorulan Sorular</div>
                    <div>Kişisel Verilerin Korunması</div>
                    <div>Gizlilik Politikası</div>
                    <div>Kullanım Koşulları</div>
                    <div>Çerez Politikası</div>
                    <div>İşlem Rehberi</div>
                </div>

            </div>
        </>

    )
}

