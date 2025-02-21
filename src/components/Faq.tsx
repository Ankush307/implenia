"use client";
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";
import { FAQ_LIST } from "@/utils/helper";
import { FaqIcon } from "@/utils/Icons";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? false : index);
    };
    return (
        <div className="bg-gray lg:pt-32 lg:pb-36 md:py-20 py-16">
            <div className="max-w-[1090px] container mx-auto max-xl:px-5">
                <CustomHeading myClass="pb-[9px]" text="FAQs" />
                {FAQ_LIST.map((data, index: number) => (
                    <div key={index} className="overflow-hidden min-h-[45px] border-b-[1px] border-solid border-dark-gray">
                        <button onClick={() => toggleAccordion(index)} className="text-[21px] gap-1  font-semibold leading-[21px] max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] items-center justify-between max-md:leading-[16px] max-sm:leading-[14px] text-light-black flex justify-between text-left w-full py-2">
                            {data.title}
                            <span className={`${openIndex === index ? "rotate-90 transition-all duration-300" : "rotate-0 transition-all duration-300"}`}><FaqIcon /></span>
                        </button>
                        <div className={`${openIndex === index ? "max-h-20 pb-3.5" : "max-h-0"} transition-all duration-500 overflow-hidden`}>
                            <p className="font-light text-[21px] pr-2 leading-[27px] tracking-[-0.28px] max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[24px] max-md:leading-[22px] max-sm:leading-[20px] text-light-black ">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
