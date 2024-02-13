'use client';
import React, { useReducer } from 'react';
import './globals.css';

import chooseData from '../data/data.js';
import { FaCalendarDays } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import Lottie from 'lottie-react';
import animatedData from '../../public/animations/Animation2.json';
import callAnimationData from '../../public/animations/call_animation.json';

//  images
import heroImg from '../../public/images/hero3.png';
import teacherImg from '../../public/images/user.jpg';
import devImg from '../../public/images/programming.png';
import markitingImg from '../../public/images/marketing.png';
import engImg from '../../public/images/eng.svg';
import ruImg from '../../public/images/ru.svg';
import turkImg from '../../public/images/tr.svg';
import krImg from '../../public/images/kr.svg';
import { BsArrowUpRight } from 'react-icons/bs';
import Image from '../../node_modules/next/image';

import { ChooseCarousel } from '@/components/ChooseCarousel/ChooseCarousel';
export default function Home() {
	return (
		<main className='  '>
			{/* <main className=' bg-herobg bg-no-repeat bg-90 w-full bg-center  '> */}
			<section className='hero_section'>
				<div className='flex py-[20px] lg:py-[50px] lg:flex-nowrap flex-wrap    items-start  '>
					<div className='left max-w-[100%] lg:max-w-[50%] mt-0 sm:mt-4 lg:text-left text-center'>
						<h1 className='bg-gradient-to-r font-bold text-[28px]  sm:text-[30px]  lg:text-[40px] from-blue-600 via-logoColor to-indigo-400 inline-block text-transparent bg-clip-text'>
							BIZ NAFAQAT TURK TILINI O'RGATAMIZ, BALKI INSONLAR HAYOTINI
							O'ZGARTIRAMIZ!
						</h1>

						<p className=' text-[18px] font-medium   my-4  lg:w-[80%] '>
							Kursimiz haqida batafsil ma’lumot olish uchun hoziroq ro’yxatdan
							o’ting
						</p>

						<button className='bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate'>
							Ro'yxatdan o'tish
						</button>
					</div>
					<div className='right relative  max-[420px]:w-[90%] sm:w-[50%] mx-auto  lg:w-[50%] '>
						<div className='  flex items-center gap-4 py-[8px]  sm:py-[15px] px-[10px] sm:px-[20px] backdrop-blur-sm bg-black/30 text-white rounded-[16px]  absolute  top-[33%] lg:top-[20%]  left-0 '>
							<div className='  bg-mainColor sm:min-w-[40px] min-w-[30px] h-[30px] sm:h-[40px] flex items-center justify-center rounded-[8px] '>
								<FaCalendarDays size={22} className='text-[10px]  ' />
							</div>
							<div>
								<p className='md:text-[16px] text-[14px]'>250k</p>
								<p className='md:text-[12px]  text-[11px] '>
									Assistend Students
								</p>
							</div>
						</div>

						<div className='  flex items-center gap-4 py-[8px]  sm:py-[15px] px-[10px] sm:px-[20px] backdrop-blur-sm bg-black/30 text-white rounded-[16px]  absolute   top-[42%] lg:left-[50%]  left-[60%]  max-[420px]:left-[52%] max-[360px]:left-[42%] max-[325px]:left-[39%] max-[360px]:top-[47%]  max-[420px]:top-[45%] '>
							<div className='  bg-orange-600 sm:min-w-[40px] min-w-[30px] h-[30px] sm:h-[40px] flex items-center justify-center rounded-[8px] '>
								<MdOutlineMail size={22} />
							</div>
							<div>
								<p className=' md:text-[16px] text-[14px] '>Congratulations</p>
								<p className='md:text-[12px]  text-[11px] '>
									Your admission complited{' '}
								</p>
							</div>
						</div>

						<div className='  py-[8px]  sm:py-[15px] px-[10px] sm:px-[20px] backdrop-blur-sm bg-black/30 text-white rounded-[16px]  absolute  bottom-[20%]  max-[420px]:bottom-[17%] '>
							<div className=' flex items-center  gap-4 '>
								<div className=' relative '>
									<Image
										src={teacherImg}
										className='w-10 h-10 rounded-full object-contain '
										alt='teacher icon'
									/>
									<span className=' w-3 h-3 rounded-full bg-mainColor block absolute left-[70%] bottom-[0px] '></span>
								</div>
								<div>
									<p className='md:text-[16px] text-[14px]'>
										Turk Tili Darslari
									</p>
									<p className='md:text-[12px]  text-[11px] '>bugun 13:00 da</p>
								</div>
							</div>
							<button className='bg-gradient-to-r from-mainColor to-logoColor text-white px-4 py-2 text-[10px] rounded-full font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate block mt-2 mx-auto '>
								guruhga qoshilish
							</button>
						</div>

						<Image
							src={heroImg}
							className='h-[500px]  ml-0 lg:ml-[150px] object-contain  '
							alt='hero img'
						/>
					</div>
				</div>
			</section>

			<section className='choose_section text-center'>
				<h2 className='  text-[30px] font-black  lg:tracking-wider tracking-wide text-center    bg-gradient-to-r sm:text-[40px]  lg:text-[60px] from-blue-600 via-logoColor to-indigo-400 inline-block text-transparent bg-clip-text '>
					Nima uchun aynan bizni tanlashingiz kerak?
				</h2>

				<p className='text-[25px]   font-medium   my-4  text-center '>
					Talabalarimizning har biri quyidagi afzalliklarga ega bo'ladi
				</p>

				<div className=' py-5  text-center hidden  md:flex justify-center  gap-y-10 gap-x-5 flex-wrap'>
					{chooseData.map((item) => (
						<div
							key={item.id}
							className=' w-[100%]  sm:w-[47%] md:w-[29%]  lg:w-[32%]   lg:py-6 lg:px-8 sm:py-5 sm:px-5  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_1px_15px_25px_6px_rgba(45,78,255,0.15)] rounded-xl  '
						>
							<div className='  bg-mainColor mx-auto  text-white w-[70px]  h-[70px] flex  items-center justify-center rounded-[20px] text-[28px]  '>
								{item.icon}
							</div>

							<h4 className=' text-[22px] text-black font-bold my-3  '>
								{item.title}
							</h4>
							<p className=' max-w-[267px] text-gray-800  mx-auto '>
								{item.desc}
							</p>
						</div>
					))}
				</div>

				<ChooseCarousel />
			</section>

			<section className='about text-center py-10 '>
				<h2 className='  text-[30px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r sm:text-[40px]  lg:text-[60px] from-blue-600 via-logoColor to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto  '>
					Biz haqimizda
				</h2>

				<div className=' flex flex-wrap my-6 justify-between w-[100%] gap-6 '>
					<div className=' md:w-[45%]  w-[100%] '>
						<Lottie animationData={animatedData} />
					</div>
					<div className='md:w-[49%] w-[100%] text-left'>
						<h4 className='text-[25px]   font-medium   my-4   '>
							<span className='  text-[30px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r  from-blue-600 via-blue-700 to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto '>
								IT Zone -
							</span>
							2023 yilda tashkil topgan o'quv markazi bo'lib, turk tili, ingliz
							tili va rus tilini o'qitish orqali mijozlarimizga yuqori sifatli
							ta'lim berishga bag'ishlangan.
						</h4>

						<h4 className='text-[25px]   font-medium   my-4   '>
							<span className='  text-[30px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r  from-blue-600 via-blue-700 to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto '>
								Bizning maqsadimiz -
							</span>
							texnologiya sohasidagi mahoratli kadrlarni o'rgatish va ularga
							texnologiyalarning so'nggi rivojlanishlarini tajriba ettirish
							orqali eng yaxshi tayyorlashdir.
						</h4>
					</div>
				</div>
			</section>

			<section className='contact  '>
				<div className=' flex flex-wrap items-center justify-between  my-10 w-[100%] '>
					<div className='md:w-[50%] w-[100%] text-left    rounded-2xl px-5  py-7 '>
						<Lottie animationData={callAnimationData} />
					</div>
					<div className='md:w-[47%] w-[100%] text-left  bg-gray-400 rounded-2xl px-5  py-7 '>
						<h4 className='  text-[34px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r  from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto '>
							Bepul konsultatsiya
						</h4>
						<p className=' text-[16px] sm:text-[20px] '>
							Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz
							va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
						</p>
						<form className='w-full  flex flex-col gap-5 mt-5 faq_form '>
							<input
								className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:py-7 py-4 px-4 placeholder-gray-600  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
								type='text'
								placeholder='Ismingiz'
								required
								maxLength={50}
							/>

							<input
								className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:py-7 py-4 px-4 placeholder-gray-600 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
								type='number'
								placeholder='998 97 777 77 77'
								required
								maxLength={13}
							/>

							<button
								className='shadow bg-orange-500 hover:bg-orange-400  w-full focus:shadow-outline focus:outline-none text-white font-bold sm:py-7 py-4 px-4  rounded'
								type='submit'
							>
								So'rov Yuborish
							</button>
						</form>
					</div>
				</div>
			</section>

			<div className='cours'>
				<h5 className=' text-[30px] font-black  lg:tracking-wider tracking-wide text-center    bg-gradient-to-r sm:text-[40px]  lg:text-[60px] from-blue-600 via-logoColor to-indigo-400 inline-block text-transparent bg-clip-text '>
					Ta'lim turlari
				</h5>

				<div className='p-5 course_card  transition-all is bg-[#F3F8FF] bg-red-500 w-[31%] pb-8 relative rounded-[20px]'>
					<h5 className='font-bold text-[25px] '>Dasturlash</h5>

					<Image src={devImg} className=' mx-auto ' alt='course img' />

					<div className='circle w-[50px] flex items-center justify-center h-[50px] bg-white absolute bottom-4 right-6 rounded-full  '>
						<BsArrowUpRight size={30} className=' course_icon ' />
					</div>
				</div>
			</div>

			<section>
				<div className='course_card bg-[#FAF9F3]'>
					<Image src={engImg} className='  ' alt='lang  img' />

					<p className=''>Ingliz tili</p>
					<h5 className='  '>Ingliz tili</h5>

					<Image
						src={teacherImg}
						className='w-10 h-10 rounded-full object-contain '
						alt='teacher icon'
					/>
					<h5 className='  '>Jon Doe </h5>
					<p className=''>O'qituvchi </p>
				</div>
			</section>
		</main>
	);
}
