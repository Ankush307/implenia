import React from 'react'
import CustomHeading from './common/CustomHeading'
import { KICKBOX_PROCESS_LIST } from '@/utils/helper'
import Image from 'next/image'
import CustomButton from './common/CustomButton'

const ImpleniaBox = () => {
    return (
        <div className='lg:pt-32 lg:pb-36 md:py-20 py-16 '>
            <div className="container max-w-[1146px] mx-auto max-xl:px-5">
                <CustomHeading text='KICKBOX PROCESS' />
                <p className="font-light text-light-black text-[21px] leading-[27px] tracking-[-0.28px] max-w-[1090px] max-md:text-lg text-custom-black pt-[17px] max-md:pt-2">The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors.</p>
                <div className="flex items-center justify-center gap-x-[51px] flex-wrap ">
                    {KICKBOX_PROCESS_LIST.map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center">
                            <Image className='lg:pt-[75px] pt-10 lg:pb-[39px] pb-6 ' src={item.image} alt={item.imageAlt} width={227} height={92} />
                            <div className="border border-black p-[28px_20px_19px_26px] rounded-2xl md:rounded-[28px]">
                                <p className={`md:text-[21px] text-base leading-[21px] pb-1 font-semibold ${i === 0 ? "text-light-red " : i === 1 ? "text-light-black" : "text-yellow"}`}>{item.subTitle} </p>
                                <p className='md:text-[35px] text-2xl font-semibold lg:leading-[44px] '>{item.title}</p>
                                <p className='font-light text-light-black md:text-[21px] md:leading-[27px] tracking-[-0.28px] max-w-[277px] pt-1 sm:pt-3'>{item.description}</p>
                                <p className='font-light text-light-black md:text-[21px] md:leading-[27px] tracking-[-0.28px] max-w-[277px] pt-2 sm:pt-[30px]'>{item.boxDuration}</p>
                                <p className='font-light text-light-black md:text-[21px] md:leading-[27px] tracking-[-0.28px] max-w-[257px]'>{item.budget}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full max-w-[268px] max-xl:mx-auto">
                    <CustomButton myClass="text-light-red border-light-red max-sm:!py-3 px-8 min-w-[268px] font-bold font-sans-bold hover:bg-light-red hover:text-white mt-10 ml-10 max-lg:text-center max-lg:ml-0 max-lg:mt-6" text="Start your RedBox!" />
                </div>
            </div>
        </div>
    )
}

export default ImpleniaBox