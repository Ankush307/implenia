import React from 'react'
import Header from './common/Header'
import Image from 'next/image'
import CustomButton from './common/CustomButton'

const Hero = () => {
    return (
        <div id='home' className='bg-hero-bg bg-cover bg-center relative'>
            <Header />
            <div className="container mx-auto max-w-[1146px] text-white lg:pb-[168px] lg:pt-[197px] py-28 max-xl:px-5">
                <h4 className='text-[21px] font-bold leading-[21px] relative z-10 text-shadow max-lg:pb-1'>Shape the future of Implenia!</h4>
                <h1 className='max-w-[575px] lg:text-[76px] md:text-[60px] text-[48px] font-bold lg:leading-[80px] md:leading-[60px] leading-[40px] pb-[25px] z-10 relative text-shadow '>WE ARE LOOKING FOR YOUR IDEA</h1>
                <CustomButton text="Bring your idea to life!" myClass="border-2 max-xl:z-10 relative border-white h-[67px] w-[312px] text-white hover:bg-black hover:text-white hover:border-black max-md:text-lg max-md:w-[240px] max-md:h-[56px]" />
            </div>
            <Image className='robot robot-animation pointer-events-none absolute md:top-[33%] top-[61%] xl:w-[375px] xl:h-[548px] md:size-[290px] size-[200px]' height={562} width={390} src="/assets/images/webp/hero-robot.webp" alt='robot img'></Image>
        </div>
    )
}

export default Hero