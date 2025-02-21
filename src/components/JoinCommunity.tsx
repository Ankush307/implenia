"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { COMMUNITY_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";
import CustomButton from "./common/CustomButton";
import { NextIcon, PrevIcon } from "@/utils/Icons";

const JoinCommunity = () => {
  return (
    <div className="bg-gray pt-[129px] pb-[130px] max-lg:py-28 max-md:py-20 max-sm:py-16 px-5">
      <div className="container max-w-[1108px] flex flex-col justify-center relative mx-auto">
        <CustomHeading myClass="pb-[116px] max-lg:pb-24 max-md:pb-[70px] max-sm:pb-[0px] max-sm:text-center" text="WHAT OUR COMMUNITY SAYS" />
        <div>
          <Swiper className="mySwiper" modules={[Navigation, Pagination]} loop={true}
            navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev", }}
            pagination={{ clickable: true, }} >
            {COMMUNITY_LIST.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[795px] flex flex-col justify-center mx-auto">
                  <p className="text-[100px] text-center leading-[125px] max-md:leading-[100%] mb-[-50px] text-yellow tracking-[-0.66px]">“ </p>
                  <h3 className="text-center font-semibold leading-[40.22px] text-[32px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:leading-9 max-md:leading-7 max-sm:leading-6">{item.heading}</h3>
                  <div className="flex items-center gap-3.5 max-w-[710px] max-lg:max-w-[unset] max-lg:justify-center mt-[30px] max-md:mt-5 max-sm:mt-[15px] ml-auto w-full">
                    <Image src={item.profile} alt="profile" width={80} height={80} className="max-lg:size-16 max-md:size-14 max-sm:size-12" />
                    <div>
                      <p className="text-off-white text-[21px] font-semibold max-lg:text-xl max-md:text-lg max-sm:text-base">{item.post}</p>
                      <p className="text-black text-[21px] font-semibold leading-[100%] max-lg:text-xl max-md:text-lg max-sm:text-base">{item.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-next max-lg:hidden absolute top-1/2 z-10 left-0"><NextIcon /> </button>
          <button className="swiper-prev max-lg:hidden absolute right-0 top-1/2 z-20 "><PrevIcon /> </button>
        </div>
        <CustomButton myClass="text-light-red border-light-red py-4 px-8 max-w-[268px] min-w-[268px] !mx-auto font-bold font-sans-bold hover:bg-light-red hover:text-white mt-[39px] ml-5 max-lg:text-center max-lg:ml-0 max-lg:mt-6" text="Join the community!"/>
      </div>
    </div>
  );
};

export default JoinCommunity;