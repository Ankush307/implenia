"use client";
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 780) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className="pb-[19px] pt-[18px] max-lg:py-4 shadow-[0px_4px_8px_0px#00000040] bg-white">
            <div className="max-w-[1177px] max-xl:px-4 mx-auto flex items-center justify-between">
                <a href="/"><Image src="/assets/images/webp/page-logo.webp" alt="page-logo" width={93} height={93} className="pointer-events-none size-[93px] max-lg:size-[70px] max-sm:size-[60px]" /></a>
                <div className={`flex max-md:gap-10 max-md:fixed max-md:top-0 max-md:-right-full max-md:h-full max-md:w-full max-md:justify-center max-md:items-center transition-all duration-300 max-md:flex-col max-md:bg-white max-md:!z-20 ${open ? "max-md:!right-0" : ""}`}>
                    <div className="flex max-md:flex-col items-center gap-[38px]">
                        {HEADER_LIST.map((item, i) => (
                            <a key={i} onClick={() => setOpen(false)} href={item.link} className="font-bold text-base max-md:text-xl !whitespace-nowrap leading-5 hover:text-custom-gold duration-300 ease-linear transition-all">{item.title}</a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-10 md:hidden">
                    <button onClick={() => setOpen(!open)} className="overflow-hidden relative z-50 lg:hidden size-8 gap-[4px] flex flex-col justify-center items-center">
                        <span className={`w-8 h-[5px] transition-all duration-300 bg-black rounded-lg ${open ? "translate-x-10" : ""}`}></span>
                        <span className={`w-8 h-[5px] transition-all duration-300 bg-black rounded-lg relative ${open ? "rotate-45" : ""} ${open ? "after:rotate-90" : ""} after:absolute after:top-0 after:left-0 after:w-8  after:h-[5px] after:bg-black after:rounded-lg`}></span>
                        <span className={`w-8 h-[5px] transition-all duration-300 bg-black rounded-lg ${open ? "-translate-x-10" : ""}`}></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;