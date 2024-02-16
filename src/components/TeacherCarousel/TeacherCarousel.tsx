'use client';

import React from 'react';
import chooseData from '../../data/data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination ,Autoplay ,Navigation } from 'swiper/modules';

 ;

export const TeacherCarousel = () => {
	return (
		<>
			<Swiper
				// slidesPerView={1}
				spaceBetween={4}
				pagination={{
					clickable: true,
				}}
				slidesPerView={'auto'}
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
						slidesPerView: 2.5,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[Pagination ,Autoplay ,Navigation]}
				className='mySwiper'
			>
				<div>
					{chooseData.map((item) => (
						<SwiperSlide key={item.id} >
							<div
								key={item.id}
								className='  max-[390px]:w-[100%] max-w-[450px]  text-center min-h-[280px]  py-5  lg:py-8 lg:px-8 sm:py-5 sm:px-5  shadow-[-1px_-1px_10px_4px_rgba(0,0,0,0.1),_1px_1px_8px_6px_rgba(45,78,255,0.15)] transition duration-300   cursor-pointer rounded-xl   '
							>
								<div className='  bg-mainColor mx-auto  text-white w-[70px]  h-[70px] flex  items-center justify-center rounded-[20px] text-[28px]  '>
									{item.icon}
								</div>

								<h4 className=' text-[22px] text-black dark:text-white font-bold my-3  '>
									{item.title}
								</h4>
								<p className='  max-w-[267px] dark:text-gray-400 text-gray-800  mx-auto '>
									{item.desc}
								</p>
							</div>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	);
};
