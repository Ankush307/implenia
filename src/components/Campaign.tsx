"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Campaign = () => {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <div className="bg-gray">
            <div className='container mx-auto max-w-[1146px] lg:pt-32 lg:pb-36 md:py-20 py-16 max-xl:px-5'>
                <h2 className='lg:text-[49px] lg:leading-[61.59px] md:text-[40px] md:leading-[52px] text-[30px] font-bold tracking-[-0.66px] lg:pb-16 pb-4  text-light-black'>HOW IT WORKS</h2>
                <div className={`w-full max-w-[1064px] mx-auto max-h-[580px] relative ${showVideo ? 'hidden' : ''}`}>
                    <Image height={580} width={1064} src="/assets/images/png/welcome-img.png" alt="welcome img" onClick={() => setShowVideo(true)} />
                    <div className="bg-dark-yellow py-2.5 w-full md:max-w-[372px] max-w-[200px] absolute sm:top-6 sm:left-7 top-1 left-1 ">
                        <p className='md:text-[21px] sm:text-xs text-[8px] md:leading-[21px] sm:leading-4 leading-3 font-bold text-center'>VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.</p>
                        <p className='md:text-[21px] sm:text-xs text-[8px] md:leading-[21px] sm:leading-4 leading-3 font-bold text-center md:pt-4'>-Titel: Name of Campaign</p>
                        <p className='md:text-[21px] sm:text-xs text-[8px] md:leading-[21px] sm:leading-4 leading-3 font-bold text-center'>-Button: Join the campaign!</p>
                    </div>
                </div>
                {showVideo && (
                    <div className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[580px] relative">
                        <iframe width="100%" height="100%" className=" " src="https://www.youtube.com/embed/Xb2FSfza95A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Campaign
