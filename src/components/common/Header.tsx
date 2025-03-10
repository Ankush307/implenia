"use client";
import { HEADER_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Number | null>(0);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open])

    return (
        <div className="pb-[19px] pt-[18px] max-lg:py-4 shadow-[0px_4px_8px_0px#00000040] bg-white">
            <div className="max-w-[1177px] max-xl:px-4 mx-auto flex items-center justify-between">
                <a href="/"><Image src="/assets/images/webp/page-logo.webp" alt="page-logo" width={93} height={93} className="pointer-events-none size-[93px] max-lg:size-[70px] max-sm:size-[60px]" /></a>
                <div className={`flex max-md:gap-10 max-md:fixed max-md:top-0 max-md:-right-full max-md:h-full max-md:w-full max-md:justify-center max-md:items-center transition-all duration-300 max-md:flex-col max-md:bg-white max-md:!z-20 ${open ? "max-md:!right-0" : ""}`}>
                    <div className="flex max-md:flex-col items-center gap-[38px]">
                        {HEADER_LIST.map((item, i) => (
                            <Link onClick={() => { setOpen(false); setActive(active === i ? null : i); }}key={i} href={item.link} className={`text-base transition-all duration-300 tracking-[0.28px] max-sm:text-lg hover:text-orange font-bold leading-[20.11px] ${active === i ? "text-orange" : "text-black"}`} >{item.title}</Link>
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