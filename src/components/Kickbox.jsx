"use client";
import { KICKBOX_LIST } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CustomButton from "./common/CustomButton";
import CustomHeading from "./common/CustomHeading";

const Kickbox = () => {
    const [count, setCount] = useState(false);
    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setCount(inView),
    });

    return (
        <div id="community" className="pt-[134px] pb-[129px] max-lg:py-20 max-md:py-[60px] overflow-hidden">
            <div className="max-w-[1090px] max-xl:px-5 mx-auto">
                <CustomHeading text="IMPLENIA KICKBOX" />
                <p className="font-light text-[21px] leading-[27px] tracking-[-0.28px] max-w-[1090px] max-md:text-lg text-light-black pt-4 max-md:pt-2"> Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!</p>
                <div className="flex items-center justify-center gap-10 xl:gap-x-[97px] pt-[47px] max-lg:pt-5 max-lg:flex-wrap">
                    <div ref={ref} className="flex gap-[52px] items-center w-full max-md:flex-wrap max-md:gap-4 max-xl:justify-center">
                        {KICKBOX_LIST.map((item, i) => (
                            <div key={i} className="flex xl:w-4/12 flex-col max-lg:items-center max-lg:justify-center" >
                                <p className="text-[40px] lg:text-[80px] md:text-[60px] leading-[100%] tracking-[-0.66px] text-yellow">+
                                    <CountUp start={0} end={count ? [155, 325, 250][i] || 0 : 0} duration={3} />
                                </p>
                                <p className="md:text-[21px] font-bold leading-[21px]">{item.description} </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <CustomButton
                            myClass="text-light-red border-light-red py-4 px-8 min-w-[268px] font-bold font-sans-bold hover:bg-light-red hover:text-white"
                            text="Submit your idea!"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kickbox

