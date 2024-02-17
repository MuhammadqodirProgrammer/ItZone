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
import Image from '../../../node_modules/next/image';
import { IoIosArrowForward } from "react-icons/io";
import { PartnorsCarousel } from '@/components/PartnorsCarusel/Partnors';
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
						<a className=' text-[#7B7C77] text-[16px] font-bold ' href='/'>
							Bosh sahifa
						</a>
                        <IoIosArrowForward  size={22} />
						<h2 className='  text-[16px] font-bold '>Biz haqimizda</h2>
					</div>
					<div className='hero max-[768px]:flex-wrap flex items-center   '>
						<div className='hero_left md:text-left text-center mb-[20px] md:w-[50% ] w-full'>
							<p className='bg-gradient-to-r font-bold text-[28px]  sm:text-[30px]  lg:text-[35px]  from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text '>
								IT ZONE
							</p>
							<h3 className=' text-[#332942] dark:text-white md:text-[38px] text-[36px]  font-bold max-w-[545px]  '>
								Biz haqimizda
							</h3>
							<p className='text-[#726A7E] md:mx-0 mx-auto dark:text-gray-200 text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px]  uppercase '>
								BIZ YANGI USULLARGA ASOSLANGAN HOLDA TURK, INGLIZ,RUS TILINI
								HAMDA IT SOHALARIDAN DARS BERUVCHI O'QUV MARKAZMIZ!
							</p>
							<div className='flex items-center justify-center md:justify-start  gap-[34px] md:mt-[56px] mt-[36px]'>
								<div>
									<p className='text-[#726A7E] dark:text-gray-200 text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px] '>
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
						<div className='hero_right md:w-[50% ] w-full  h-[355px] rounded-[32px] overflow-hidden '>
							<iframe
								width='100%'
								height={355}
								src='https://www.youtube.com/embed/GpCz-o45nD8?si=Vcr4wTr4xTQ-m9fY'
								title='YouTube video player'
								frameBorder={0}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
							/>

						</div>
					</div>
				</section>
				<section className='why_us text-center py-[60px]   '>
					<div className='mycontainer'>
						<p className='from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text bg-gradient-to-r text-[24px] font-bold  '>
							Nima uchun
						</p>
						<h3 className=' text-[#332942] dark:text-white text-[40px]  font-bold  '>
							Bizni tanlashingiz shart
						</h3>
						<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[16px] font-normal max-w-[480px] mt-[24px] '>
							Biz sizning kelajagingiz haqida qayg'uramiz
						</p>
						<div className='service_box grid mt-[56px]  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 '>
							<div className=' p-[10px]'>
								<Image
									src={handImg}
									alt='proffesion icon'
									className=' mx-auto h-[60px] object-contain mb-[5px] '
								/>

								<p className=' text-[#332942] dark:text-white text-[18px]  font-bold  '>
									Ajoyib g'oyalar
								</p>
								<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
									Eng yaxshi o'quv markazlardan biri , O'qtuvchilari ham ancha
									tajribali , Bu yerda oqiganimdan afsuslanmayman
								</p>
							</div>
							<div className=' p-[10px]'>
								<Image
									src={proffesionImg}
									alt='proffesion icon'
									className=' h-[60px] object-contain mb-[5px] '
								/>

								<p className=' text-[#332942] dark:text-white text-[18px]  font-bold  '>
									Professionallik
								</p>
								<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
									Eng yaxshi o'quv markazlardan biri , O'qtuvchilari ham ancha
									tajribali , Bu yerda oqiganimdan afsuslanmayman
								</p>
							</div>
							<div className=' p-[10px]'>
								<Image
									src={teacherImg}
									alt='proffesion icon'
									className=' h-[60px] object-contain mb-[5px] '
								/>

								<p className=' text-[#332942] dark:text-white text-[18px]  font-bold  '>
									Mutaxassislar xizmati
								</p>
								<p className='text-[#726A7E] dark:text-gray-200 mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
									Eng yaxshi o'quv markazlardan biri , O'qtuvchilari ham ancha
									tajribali , Bu yerda oqiganimdan afsuslanmayman
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='why_us text-center py-[60px]   '>
					<div className='mycontainer'>
						<p className='from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text bg-gradient-to-r text-[24px] font-bold  '>
							Biz haqimizda
						</p>
						<h3 className=' text-[#332942] dark:text-white text-[40px]  font-bold  '>
							O'quvchilarning fikrlari
						</h3>
						<div className='service_box grid mt-[56px]  md:grid-cols-2  grid-cols-1 '>
							<div className=' text-center p-[10px]'>
								<Image
									src={qtImg}
									alt=' icon'
									className=' h-[60px] object-contain mx-auto mb-[5px] '
								/>

								<p className=' text-[#332942] dark:text-white text-[18px]  font-medium  '>
									Eng yaxshi o'quv markazlardan biri , O'qtuvchilari ham ancha
									tajribali , Bu yerda oqiganimdan afsuslanmayman
								</p>
								<div className='mt-[10px]'>
									<Image
										src={student1Img}
										alt='student img'
										className=' h-[60px] object-contain mx-auto mb-[5px] '
									/>
									<p className=' text-[#726A7E] dark:text-gray-200 text-[16px]  font-normal  '>
										Muhammadqodir
									</p>
									<Image
										src={starsImg}
										alt='proffesion icon'
										className=' h-[60px] object-contain mx-auto mb-[5px] '
									/>
								</div>
							</div>
							<div className=' text-center p-[10px]'>
								<Image
									src={qtImg}
									alt=' icon'
									className=' h-[60px] object-contain mx-auto mb-[5px] '
								/>

								<p className=' text-[#332942] dark:text-white text-[18px]  font-medium  '>
									Eng yaxshi o'quv markazlardan biri , O'qtuvchilari ham ancha
									tajribali , Bu yerda oqiganimdan afsuslanmayman
								</p>
								<div className='mt-[10px]'>
									<Image
										src={student2Img}
										alt='student img'
										className=' h-[60px] object-contain mx-auto mb-[5px] '
									/>
									<p className=' text-[#726A7E] dark:text-gray-200 text-[16px]  font-normal  '>
										Risolat
									</p>
									<Image
										src={starsImg}
										alt='proffesion icon'
										className=' h-[60px] object-contain mx-auto mb-[5px] '
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='why_us text-center py-[60px]   '>
					<div className='mycontainer'>
						<p className='from-blue-600 via-orange-700 to-indigo-400 inline-block text-transparent bg-clip-text bg-gradient-to-r text-[24px] font-bold  '>
							Biz bilan ishlovchi
						</p>
						<h3 className=' text-[#332942] dark:text-white text-[40px]  font-bold  '>
							Hamkor kompaniyalar
						</h3>
						<div className=' my-[20px] '>
							<PartnorsCarousel />
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
