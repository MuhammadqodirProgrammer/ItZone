'use client';
import React, {
	HtmlHTMLAttributes,
	RefAttributes,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react';
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
import designImg from '../../public/images/design.png';
import engImg from '../../public/images/eng.svg';
import ruImg from '../../public/images/ru.svg';
import turkImg from '../../public/images/tr.svg';
import krImg from '../../public/images/kr.svg';
import { BsArrowUpRight } from 'react-icons/bs';
import { MdArrowOutward } from 'react-icons/md';
import Image from '../../node_modules/next/image';

import { Toaster, toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChooseCarousel } from '@/components/ChooseCarousel/ChooseCarousel';
import { Modal } from '@/components/Modal/Modal';
import sendMessage from '@/lib/sendMessage';
export default function Home() {
	const nameRef: any = useRef<HTMLInputElement>();
	const phoneRef: any = useRef<HTMLInputElement>();
	const modalNameRef: any = useRef<HTMLInputElement>();
	const modalPhoneRef: any = useRef<HTMLInputElement>();
	const modalCourseRef: any = useRef<HTMLInputElement>();
	const [requestModal, setRequestModal] = useState<boolean>(false);
	const [isSending, setIsSending] = useState<boolean>(false);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const sendDataFunc = (data: UserReq) => {
		const sendResp: sendRespType = sendMessage(data);
		if (sendResp.success) {
			toast.success(sendResp.message);
			setIsSending((prev) => !prev);
			setRequestModal(false);
		} else {
			toast.error(sendResp.message);
			setIsSending((prev) => !prev);
		}
	};
	const handleSubmit = (evt: any) => {
		evt.preventDefault();
		setIsSending(true);
		const data = {
			userName: nameRef.current?.value || 'kimdir',
			phone: phoneRef.current?.value || 'nomeri kirgazilmadi',
		};
		sendDataFunc(data);
	};
	const handleModalSubmit = (evt: any) => {
		evt.preventDefault();
		setIsSending(true);
		const data = {
			userName: modalNameRef.current?.value || 'kimdir',
			phone: modalPhoneRef.current?.value || 'nomeri kirgazilmadi',
			course: modalCourseRef.current?.value,
		};
		sendDataFunc(data);
	};

	return (
		<main className='  '>
			<section className='hero_section'>
				<div className='flex py-[20px] lg:py-[50px] lg:flex-nowrap flex-wrap    items-start  '>
					<div className='left max-w-[100%] lg:max-w-[50%] mt-0 sm:mt-4 lg:text-left text-center'>
						<h1 className='bg-gradient-to-r font-bold text-[28px]  sm:text-[30px]  lg:text-[40px]  from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text'>
							BIZ NAFAQAT TURK TILINI O'RGATAMIZ, BALKI INSONLAR HAYOTINI
							O'ZGARTIRAMIZ!
						</h1>

						<p className=' text-[18px] font-medium   my-4  lg:w-[80%] '>
							Kursimiz haqida batafsil ma’lumot olish uchun hoziroq ro’yxatdan
							o’ting
						</p>

						<button
							className='bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black cursor-pointer ring-opacity-10 gradient element-to-rotate'
							onClick={() => setRequestModal(true)}
						>
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
							<button className='bg-gradient-to-r from-mainColor to-logoColor text-white px-4 py-2 text-[10px] rounded-full font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate block mt-2 mx-auto cursor-pointer'>
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

			<section className='choose_section text-center  '>
				<h2 className=' animate-rotate-y   text-[30px] font-black  lg:tracking-wider tracking-wide text-center    bg-gradient-to-r sm:text-[40px]  lg:text-[60px]  from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text '>
					Nima uchun aynan bizni tanlashingiz kerak?
				</h2>

				<p className='sm:text-[25px] text-[16px]   font-medium   my-4  text-center '>
					Talabalarimizning har biri quyidagi afzalliklarga ega bo'ladi
				</p>

				<div className=' py-5  text-center hidden  md:flex justify-between  gap-y-10 gap-x-5 flex-wrap'>
					{chooseData.map((item) => (
						<div
							key={item.id}
							data-aos='flip-left'
							data-aos-delay='100'
							className=' w-[100%]  sm:w-[47%] md:w-[29%]  lg:w-[31%]   lg:py-8 lg:px-8 sm:py-5 sm:px-5  shadow-[-1px_-1px_10px_4px_rgba(0,0,0,0.1),_1px_1px_8px_6px_rgba(45,78,255,0.15)] transition duration-300  hello cursor-pointer rounded-xl  text-center'
						>
							<div className='  bg-mainColor   text-white w-[70px]  h-[70px] flex  items-center justify-center rounded-[20px] text-[28px] mx-auto '>
								{item.icon}
							</div>

							<h4 className=' text-[22px]  font-bold my-3  '>{item.title}</h4>
							<p className=' max-w-[267px] dark:text-gray-400 text-gray-800  mx-auto '>
								{item.desc}
							</p>
						</div>
					))}
				</div>

				<ChooseCarousel />
			</section>

			<section id='#about' className='about text-center py-10 '>
				<h2 className='  text-[30px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r sm:text-[40px]  lg:text-[60px]  from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto  '>
					Biz haqimizda
				</h2>
				<div className=' flex flex-wrap my-6 justify-between w-[100%] gap-6 '>
					<div data-aos='fade-right' className=' md:w-[45%]  w-[100%] '>
						<Lottie animationData={animatedData} />
					</div>

					<div data-aos='fade-left' className='md:w-[49%] w-[100%] text-left'>
						<h4
							data-aos='fade-left'
							data-aos-delay='200'
							className='sm:text-[25px] text-[16px]   font-medium   my-4   '
						>
							<span className='  text-[22px] sm:text-[30px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r  from-blue-600 via-blue-700 to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto '>
								IT Zone -
							</span>
							2023 yilda tashkil topgan o'quv markazi bo'lib, turk tili, ingliz
							tili va rus tilini o'qitish orqali mijozlarimizga yuqori sifatli
							ta'lim berishga bag'ishlangan.
						</h4>
						<h4
							data-aos='fade-left'
							data-aos-delay='400'
							className='sm:text-[25px] text-[16px]   font-medium   my-4   '
						>
							<span className='  text-[22px] sm:text-[30px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r  from-blue-600 via-blue-700 to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto '>
								Bizning maqsadimiz -
							</span>
							texnologiya sohasidagi mahoratli kadrlarni o'rgatish va ularga
							texnologiyalarning so'nggi rivojlanishlarini tajriba ettirish
							orqali eng yaxshi tayyorlashdir.
						</h4>
					</div>
				</div>
			</section>

			<section id='#courses' className='course my-8 '>
				<h5 className=' text-[30px] font-black  lg:tracking-wider tracking-wide block text-center mx-auto     bg-gradient-to-r sm:text-[40px]  lg:text-[60px]  from-blue-600 via-orange-700 to-indigo-400  text-transparent bg-clip-text mb-4 '>
					Ta'lim turlari
				</h5>

				<div className=' flex  justify-between flex-wrap gap-y-5 '>
					<div
						data-aos='zoom-in'
						data-aos-delay='50'
						className='p-5 course_card hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] dark:bg-[#18273f]  bg-[#d9dde3] w-[100%]   sm:w-[48%] md:w-[31%] pb-8 relative rounded-[20px]'
					>
						<h5 className='font-bold text-[25px] '>Dasturlash</h5>

						<Image src={devImg} className=' mx-auto ' alt='course img' />

						<div className='circle w-[50px] flex items-center justify-center h-[50px] bg-white dark:bg-slate-600 absolute bottom-4 right-6 rounded-full  '>
							<MdArrowOutward
								size={30}
								className=' course_icon  dark:text-white '
							/>
						</div>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='150'
						className='p-5 course_card hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] dark:bg-[#18273f]  bg-[#d9dde3] w-[100%]   sm:w-[48%] md:w-[31%] pb-8 relative rounded-[20px]'
					>
						<h5 className='font-bold text-[25px] '>Marketing </h5>

						<Image src={markitingImg} className=' mx-auto ' alt='course img' />

						<div className='circle w-[50px] flex items-center justify-center h-[50px] bg-white dark:bg-slate-600 absolute bottom-4 right-6 rounded-full  '>
							<MdArrowOutward
								size={30}
								className=' course_icon  dark:text-white '
							/>
						</div>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='250'
						className='p-5 course_card hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] dark:bg-[#18273f]  bg-[#d9dde3] w-[100%]   sm:w-[48%] md:w-[31%] pb-8 relative rounded-[20px]'
					>
						<h5 className='font-bold text-[25px] '>Dizayn</h5>

						<Image src={designImg} className=' mx-auto ' alt='course img' />

						<div className='circle w-[50px] flex items-center justify-center h-[50px] bg-white dark:bg-slate-600 absolute bottom-4 right-6 rounded-full  '>
							<MdArrowOutward
								size={30}
								className=' course_icon  dark:text-white '
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='contact  '>
				<div className=' flex flex-wrap items-center justify-between  my-10 w-[100%] '>
					<div
						data-aos='fade-right'
						className='md:w-[50%] w-[100%] text-left    rounded-2xl px-5  py-7 '
					>
						<Lottie animationData={callAnimationData} />
					</div>

					<div
						data-aos='fade-left'
						className='md:w-[47%] w-[100%] text-left  bg-gray-400 dark:bg-[#18273f] rounded-2xl px-5  py-7 '
					>
						<h4 className='  sm:text-[34px] text-[26px] font-black  lg:tracking-wider tracking-wide     bg-gradient-to-r  from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text  mx-auto '>
							Bepul konsultatsiya
						</h4>
						<p className=' text-[16px] sm:text-[20px] '>
							Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz
							va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
						</p>
						<form
							onSubmit={handleSubmit}
							className='w-full  flex flex-col gap-5 mt-5 faq_form '
						>
							<input
								className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:py-4  py-3 px-4 placeholder-gray-600  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 dark:bg-slate-600 dark:placeholder-gray-100 dark:text-white dark:border-orange-500 dark:focus:border-orange-700'
								type='text'
								placeholder='Ismingiz'
								required
								maxLength={50}
								ref={nameRef}
							/>

							<input
								className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:py-4  py-3 px-4 placeholder-gray-600 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500  dark:bg-slate-600 dark:placeholder-gray-100 dark:text-white dark:border-orange-500 dark:focus:border-orange-700'
								type='number'
								placeholder='97 777 77 77'
								required
								maxLength={13}
								ref={phoneRef}
							/>

							<button
								className='shadow dark:bg-orange-700 dark:hover:bg-orange-600 bg-orange-500 hover:bg-orange-400   w-full focus:shadow-outline focus:outline-none text-white font-bold sm:py-4 cursor-pointer py-3 px-4  rounded'
								type='submit'
								disabled={isSending}
							>
								{isSending ? 'Yuborilmoqda...' : "So'rov Yuborish"}
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* Modals */}

			<Modal
				width={'sm:w-[500px] w-[90%]'}
				title={"Malumotlaringizni kiriting va biz sz bilan bog'lanamiz"}
				modal={requestModal}
				setModal={setRequestModal}
			>
				<div className=' md:p-1  w-full'>
					<form
						className='flex flex-col  items-center gap-3 justify-center'
						onSubmit={handleModalSubmit}
					>
						<input
							className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:py-4  py-3 px-4 placeholder-gray-600 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500  dark:bg-slate-600 dark:placeholder-gray-100 dark:border-orange-500 dark:text-white dark:focus:border-orange-700'
							placeholder='Ismingiz'
							type='text'
							ref={modalNameRef}
						/>

						<input
							className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:py-4  py-3 px-4 placeholder-gray-600 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500  dark:bg-slate-600 dark:placeholder-gray-100 dark:border-orange-500 dark:text-white dark:focus:border-orange-700'
							placeholder='97 777 77 77'
							type='number'
							ref={modalPhoneRef}
						/>
						<select
							ref={modalCourseRef}
							className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:py-4  py-3 px-4 placeholder-gray-600 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500  dark:bg-slate-600 dark:placeholder-gray-100 dark:text-white dark:border-orange-500 dark:focus:border-orange-700'
						>
							<option value='Rus tili'>Rus tili</option>
							<option value='Turk tili'>Turk tili</option>
							<option value='Ingliz tili'>Ingliz tili</option>
							<option value='Frontend'>Frontend</option>
							<option value='Backend'>Backend</option>
						</select>
						<button
							className='shadow  dark:bg-orange-700 dark:hover:bg-orange-600 bg-orange-500 hover:bg-orange-400   w-full focus:shadow-outline focus:outline-none text-white font-bold sm:py-4 cursor-pointer py-3 px-4  rounded'
							type='submit'
							disabled={isSending}
						>
							{isSending ? 'Yuborilmoqda...' : "So'rov Yuborish"}
						</button>
					</form>
				</div>
			</Modal>

			<Toaster position='top-center' />
		</main>
	);
}
