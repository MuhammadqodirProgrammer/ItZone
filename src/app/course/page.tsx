'use client';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sendMessage from '@/lib/sendMessage';
import { Toaster, toast } from 'react-hot-toast';
import { Modal } from '@/components/Modal/Modal';
import proffesionImg from '../../../public/images/proffesion.png';
import teacherImg from '../../../public/images/teachericon.png';
import handImg from '../../../public/images/hand.png';
import student1Img from '../../../public/images/student1.png';
import student2Img from '../../../public/images/student2.png';
import starsImg from '../../../public/images/stars.png';
import qtImg from '../../../public/images/qt.png';
import engImg from '../../../public/images/eng.svg';
import mobileImg from '../../../public/images/smartphone.png';
import uxImg from '../../../public/images/ux.png';
import backImg from '../../../public/images/backend.png';
import heroImg from '../../../public/images/boy.png';
import hero2Img from '../../../public/images/boyfriends.png';
import Image from '../../../node_modules/next/image';
import Link from '../../../node_modules/next/link';
import { IoIosArrowForward } from 'react-icons/io';

export default function About() {
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
		<>
			<div>
				<section className='  py-[40px] '>
					<div className='flex items-center my_b gap-2 mycontainer'>
						<Link className=' text-[#7B7C77] text-[16px] font-bold ' href='/'>
							Bosh sahifa
						</Link>
						<IoIosArrowForward size={22} />
						<h2 className='  text-[16px] font-bold '>Biz haqimizda</h2>
					</div>
					<div className='hero max-[768px]:flex-wrap flex items-center   '>
						<div className='hero_left md:text-left text-center mb-[20px] md:w-[50% ] w-full'>
							<p className='bg-gradient-to-r font-bold text-[28px]  sm:text-[30px]  lg:text-[35px]  from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text '>
								IT ZONE
							</p>
							<h3 className=' text-[#332942]  dark:text-white md:text-[38px] text-[36px]  font-bold max-w-[545px]  '>
								Bizning Kurslar
							</h3>
							<p className='text-[#726A7E] dark:text-gray-200 md:mx-0 mx-auto  text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px]  uppercase '>
								BIZ YANGI USULLARGA ASOSLANGAN HOLDA TURK, INGLIZ,RUS TILINI
								HAMDA IT SOHALARIDAN DARS BERUVCHI O'QUV MARKAZMIZ!
							</p>
							<div className='flex items-center justify-center md:justify-start  gap-[34px] md:mt-[56px] mt-[36px]'>
								<div>
									<p className='text-[#726A7E] dark:text-gray-200  text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px] '>
										Mijozlarimiz
									</p>
									<h3 className='from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text bg-gradient-to-r text-[32px] mt-[5px] font-bold '>
										2000+
									</h3>
								</div>
								<div>
									<p className='text-[#726A7E] dark:text-gray-200 text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px] '>
										Ish tajribamiz
									</p>
									<h3 className='from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text bg-gradient-to-r text-[32px] mt-[5px] font-bold '>
										10 yil
									</h3>
								</div>
							</div>
						</div>
						<div className='hero_right md:w-[50% ] w-full  max-h-[455px] rounded-[32px] overflow-hidden '>
							<Image
								src={hero2Img}
								alt='it zone student'
								className=' object-contain  w-auto sm:w-[450px] mx-auto  '
							/>
						</div>
					</div>
				</section>

				<section className='invitation text-center py-[60px]  '>
					<div className='mycontainer'>
						<p className='text-[#0b5299] text-[24px] font-bold  '>Siz uchun</p>
						<h3 className=' text-[#332942] dark:text-white text-[40px]  font-bold  max-w-[630px] mx-auto '>
							Biz sizga taklif etamiz
						</h3>
						<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[16px] font-normal max-w-[500px] mt-[24px] '>
							«IT Zone»da dasturlashning quyidagi yo'nalishlarida kurslar mavjud
						</p>
						<div className='service_box grid mt-[56px]  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[24px] '>
							<div className='service_card bg-[#fff] dark:bg-[#1E2761] p-[24px]   shadow-[-1px_-1px_10px_4px_rgba(0,0,0,0.1),_1px_1px_8px_6px_rgba(45,78,255,0.15)] transition duration-300  hello cursor-pointer rounded-xl  '>
								<Image
									src={uxImg}
									alt='img '
									className='mx-auto  object-cover mb-[16px] '
								/>
								<h4 className=' text-mainColor text-[24px]  font-bold  '>
									Frontend
								</h4>
								<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
									Veb-sahifa va veb-ilovalarning foydalanuvchiga koʻrinadigan
									qismini hosil qilish sohasidir.
								</p>
								<button 
								onClick={()=>setRequestModal(true)}
								className=' mt-6 mb-[1px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0b5299] border-[1px] border-[#0b5299]  text-[#0b5299] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
									Kursga yozilish
								</button>
							</div>

							<div className='service_card bg-[#fff] dark:bg-[#1E2761] p-[24px]   shadow-[-1px_-1px_10px_4px_rgba(0,0,0,0.1),_1px_1px_8px_6px_rgba(45,78,255,0.15)] transition duration-300  hello cursor-pointer rounded-xl  '>
								<Image
									src={backImg}
									alt='img '
									className='mx-auto  object-cover mb-[16px] '
								/>
								<h4 className=' text-mainColor text-[24px]  font-bold  '>
									Backend
								</h4>
								<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
									Maʼlumotlarni veb-brauzerning foydalanuvchi koʻradigan qismiga
									qanday uzatilishini taʼminlaydi.
								</p>
								<button 
								onClick={()=>setRequestModal(true)}
								className=' mt-6 mb-[1px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0b5299] border-[1px] border-[#0b5299]  text-[#0b5299] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
									Kursga yozilish
								</button>
							</div>
							<div className='service_card bg-[#fff] dark:bg-[#1E2761] p-[24px]   shadow-[-1px_-1px_10px_4px_rgba(0,0,0,0.1),_1px_1px_8px_6px_rgba(45,78,255,0.15)] transition duration-300  hello cursor-pointer rounded-xl  '>
								<Image
									src={mobileImg}
									alt='img '
									className='mx-auto  object-cover mb-[16px] '
								/>
								<h4 className=' text-mainColor text-[24px]  font-bold  '>
									Mobile
								</h4>
								<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
									Mobil qurilmalar uchun ilovalar yaratish. Masalan: Telegram,
									Instagram, Facebook mobil ilovalari.
								</p>
								<button 
								onClick={()=>setRequestModal(true)}
								className=' mt-6 mb-[1px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0b5299] border-[1px] border-[#0b5299]  text-[#0b5299] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
									Kursga yozilish
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>

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
		</>
	);
}
