'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';

function Header() {
	const { setTheme } = useTheme();
	const pathname = usePathname();
	const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
	const [active, setActive] = useState(true);
	const [theme, setThemeState] = useState('light');
	const logoutRef: any = useRef<any>();
	let userName: any;
	if (typeof window !== 'undefined') {
		userName = localStorage.getItem('userName');
	}
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setThemeState(newTheme);
		setTheme(newTheme);
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme);
		}
	};

	useEffect(() => {
		let storedTheme: any;
		if (typeof window !== 'undefined') {
			storedTheme = localStorage.getItem('theme');
		}
		if (storedTheme) {
			setThemeState(storedTheme);
			setTheme(storedTheme);
		}
	}, []);

	const toggleOffcanvas = () => {
		setOffcanvasOpen(!isOffcanvasOpen);
	};
	return (
		<>
			<header className=' header shadow-lg  bg-[#EDF2F7] dark:bg-[#171923]  sticky w-full z-50 top-0 left-0 '>
				<div className='flex    gap-x-5 m-auto  justify-between inner_container items-center'>
					<Link href='/' className=''>
						<Image src={Logo} height={50} alt='logo' />
					</Link>

					<div className='flex'>
						<div className='   hidden md:flex lg:items-center gap-x-[25px] '>
							<div className='text-sm  md:flex items-center gap-x-[25px]'>
								<a
									href='#courses'
									className='block  lg:inline-block  text-mainColor hover:text-blue-900  font-medium text-[20px] '
								>
									Kurslar
								</a>
								<a
									href='#news'
									className='block  lg:inline-block  text-mainColor hover:text-blue-900  font-medium text-[20px] '
								>
									Yangiliklar
								</a>
								<a
									href='#about'
									className='block  lg:inline-block  text-mainColor  hover:text-blue-900  font-medium text-[20px] '
								>
									Biz haqimizda
								</a>
							</div>
							
								<button className='inline-block  px-4 py-3 leading-none border rounded-full text-[20px]  font-medium bg-inherit bg-inherit text-mainColor duration-500 transition-[2s] border-mainColor  hover:text-white hover:bg-blue-900 '>
									Ro'yhatdan o'tish
								</button>
							
						</div>

						<button
							type='button'
							className='menu header_icons_box  text-mainColor '
							onClick={toggleOffcanvas}
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth={0}
								viewBox='0 0 24 24'
								focusable='false'
								className='chakra-icon css-13otjrl'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='Menu_Fries'>
									<path d='M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z' />
									<path d='M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z' />
									<path d='M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z' />
								</g>
							</svg>
						</button>
						{/* <ModeToggle /> */}

						 <button
							type='button'
							className=' header_icons_box'
							onClick={() => {
								toggleTheme();
								setActive(!active);
							}}
						>
							<svg
								className={active ? '' : 'hidden'}
								stroke='currentColor'
								fill='none'
								stroke-width='2'
								viewBox='0 0 24 24'
								stroke-linecap='round'
								stroke-linejoin='round'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx='12' cy='12' r='5'></circle>
								<line x1='12' y1='1' x2='12' y2='3'></line>
								<line x1='12' y1='21' x2='12' y2='23'></line>
								<line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
								<line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
								<line x1='1' y1='12' x2='3' y2='12'></line>
								<line x1='21' y1='12' x2='23' y2='12'></line>
								<line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
								<line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
							</svg>
							<svg
								className={!active ? '' : 'hidden'}
								stroke='currentColor'
								fill='currentColor'
								strokeWidth={0}
								viewBox='0 0 16 16'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />
								<path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
							</svg>
						</button>
					</div>
				</div>
			</header>

			{isOffcanvasOpen && (
				<nav className='navbar_offcanvas bg-[#EDF2F7]  dark:bg-[#475569]  fixed top-0 left-0  h-screen  '>
					<div className='h-[10vh] flex items-center px-3 justify-between'>
						<Image src={Logo} height={50} alt='logo' />

						<button
							onClick={toggleOffcanvas}
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900   rounded-lg text-sm w-8 h-8  inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
						>
							<svg
								className='w-3 h-3'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 14'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
								/>
							</svg>
						</button>
					</div>
					<div className=' bg-[#EDF2F7]  dark:bg-[#475569] h-screen  p-[20px]'>
						<div className=' w-[100%]   flex flex-col items-center  gap-[25px] '>
							<div className='text-sm w-[100%] flex-col  justify-center lg:flex items-center gap-[25px]'>
								<a
									href='#responsive-header'
									className='block mt-4 w-[100%]   text-mainColor hover:text-blue-900  font-medium text-[20px] '
								>
									Kurslar
								</a>
								<a
									href='#responsive-header'
									className='block mt-4 w-[100%]   text-mainColor hover:text-blue-900  font-medium text-[20px] '
								>
									Yangiliklar
								</a>
								<a
									href='#responsive-header'
									className='block mt-4 w-[100%]   text-blue-700 hover:text-blue-900  font-medium text-[20px] '
								>
									Biz haqimizda
								</a>
							</div>
							<button className='inline-block w-[100%]  px-4 py-3 leading-none border rounded-full text-[20px]  font-medium bg-inherit bg-mainColor text-mainColor duration-500 transition-[2s] border-mainColor  hover:text-white hover:bg-blue-900 '>
									Ro'yhatdan o'tish
								</button>
							<button
								type='button'
								className=' header_icons_box  rounded-full py-3 phone_theme border-[1px] border-blue-900 text-blue-900 w-[100%] '
								onClick={() => {
									toggleTheme();
									setActive(!active);
								}}
							>
								<svg
									className={active ? '' : 'hidden'}
									stroke='currentColor'
									fill='none'
									stroke-width='2'
									viewBox='0 0 24 24'
									stroke-linecap='round'
									stroke-linejoin='round'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='12' cy='12' r='5'></circle>
									<line x1='12' y1='1' x2='12' y2='3'></line>
									<line x1='12' y1='21' x2='12' y2='23'></line>
									<line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
									<line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
									<line x1='1' y1='12' x2='3' y2='12'></line>
									<line x1='21' y1='12' x2='23' y2='12'></line>
									<line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
									<line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
								</svg>
								<svg
									className={!active ? '' : 'hidden'}
									stroke='currentColor'
									fill='currentColor'
									strokeWidth={0}
									viewBox='0 0 16 16'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />
									<path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
								</svg>
							</button>
						</div>
					</div>
				</nav>
			)}
		</>
	);
}

export default Header;
