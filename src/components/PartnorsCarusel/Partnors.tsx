'use client';

import React from 'react';
import chooseData from '../../data/data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Autoplay ,Navigation } from 'swiper/modules';

 ;

export const PartnorsCarousel = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={4}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				  }}
				breakpoints={{
					20: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					490: {
						slidesPerView: 1.5,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					2024: {
						slidesPerView: 5,
						spaceBetween: 30,
					},
				}}
				modules={[ Autoplay ,Navigation]}
				className=''
			>
				<div className="my-[200px]">
					{chooseData.map((item) => (
						<SwiperSlide key={item.id} >
							<div className=' w-[197px] h-[100px] dark:bg-[#F6F7ED] bg-[#e0e4c0]   rounded-[16px]   '>
								<div className=' w-full h-full text-[#C1C2B4] text-[40px] font-semibold  flex items-center justify-center'>
									LOGO {item.id}
								</div>
							</div>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	);
};
