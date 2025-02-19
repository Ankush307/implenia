import React from 'react'
import Header from './common/Header'
import Image from 'next/image'

const Hero = () => {
    return (
        <div id='home' className='bg-hero-bg bg-cover bg-center relative'>
            <Header />
            <div className="container mx-auto max-w-[1146px] text-white lg:pb-[168px] lg:pt-[197px] md:py-24 sm:py-20 py-16 max-xl:px-5">
                <h4 className='text-[21px] font-bold leading-[21px] relative z-10 text-shadow max-lg:pb-1'>Shape the future of Implenia!</h4>
                <h1 className='max-w-[575px] lg:text-[76px] md:text-[60px] text-[48px] font-bold lg:leading-[80px] md:leading-[60px] leading-[40px] pb-[25px] z-10 relative text-shadow '>WE ARE LOOKING FOR YOUR IDEA</h1>
                <button className='md:text-[21px] text-lg font-bold leading-[21px] border-white bg-transparent md:py-[21px] md:px-[52px] px-[30px] py-[15px] border-2 rounded-full hover:bg-black hover:border-black duration-300 transition-all ease-linear'>Bring your idea to life!</button>
                <Image className='absolute robot robot-animation pointer-events-none max-xl:hidden top-[33%] left-[0%] max-w-[390px] max-h-[562px] w-full' height={562} width={390} src="/assets/images/webp/hero-robot.webp" alt='robot img'></Image>
            </div>
        </div>
    )
}

export default Hero