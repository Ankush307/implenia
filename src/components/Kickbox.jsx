"use client";
import { KICKBOX_LIST } from "@/utils/helper";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Kickbox = () => {
    const [count, setCount] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false,
        onChange: (inView) => setCount(inView),
    });

    React.useEffect(() => {
        if (inView) {
            setCount(true);
        }
    }, [inView]);

    return (
        <div id="community" className="pt-[134px] pb-[129px] max-lg:py-20 max-md:py-[60px] overflow-hidden">
            <div className="max-w-[1122px] px-4 mx-auto" ref={ref}>
                <h2 className='lg:text-[49px] lg:leading-[61.59px] md:text-[40px] md:leading-[52px] leading-[40px] text-[30px] font-bold tracking-[-0.66px] pb-4 text-light-black'>IMPLENIA KICKBOX</h2>
                <p className="font-light text-[21px] leading-[27px] tracking-[-0.28px] max-w-[1090px] max-md:text-lg text-custom-black pt-4 max-md:pt-2"> Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!</p>
                <div className="flex sm:gap-x-12 gap-x-9 gap-y-5 flex-wrap items-center justify-between pt-[47px] max-lg:pt-5 max-md:justify-center">
                    {KICKBOX_LIST.map((item, i) => (
                        <div key={i} className="flex flex-col max-md:items-center max-md:justify-center" >
                            <p className="text-[40px] lg:text-[80px] md:text-[60px] sm:leading-[60px] leading-[40px] lg:leading-[100px] tracking-[-0.66px] text-custom-gold">+
                                <CountUp start={0} end={count && i === 0 ? 155 : count && i === 1 ? 325 : count && i === 2 ? 250 : 0} duration={3} />
                            </p>
                            <p className="md:text-[21px] font-bold leading-[21px]">{item.description} </p>
                        </div>
                    ))}
                    <div className="flex items-center justify-center">
                        <button className='text-[21px] max-w-[268px] max-lg:mx-auto text-light-red max-h-[56px] border-light-red font-bold leading-[21px] bg-transparent md:py-[15.5px] md:px-[49px] px-[30px] py-[15px] border-2 rounded-full hover:text-white hover:bg-light-red transition-all ease-linear duration-300'>Submit your idea!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kickbox

