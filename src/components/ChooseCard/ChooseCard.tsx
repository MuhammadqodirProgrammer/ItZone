import React from 'react'

const ChooseCard = ({icon:string ,title:string, desc:string}) => {
  return (
    <div>
      
      <div className=' w-[100%]  sm:w-[47%] md:w-[29%]  lg:w-[32%]   py-6 px-8 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_1px_15px_25px_6px_rgba(45,78,255,0.15)] rounded-xl  '>
						<div className='  bg-mainColor mx-auto  text-white w-[70px]  h-[70px] flex  items-center justify-center rounded-[20px] text-[28px]  '>
							{icon}
						</div>

						<h4 className=' text-[22px] text-black font-bold my-3  '> {title}</h4>
						<p className=' max-w-[267px] text-gray-800  mx-auto '>
						{desc}
						</p>
					</div>
    </div>
  )
}

export default ChooseCard
