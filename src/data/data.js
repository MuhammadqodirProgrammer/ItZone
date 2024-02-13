import { FaCalendarDays } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { GiBookmarklet } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { CgUserlane } from "react-icons/cg";

const data = [
	{
		id: 1,
		icon: <MdOutlineMail size={30} />,
		title: 'Biz tajribalimiz',
		desc: '8 yildan ortiq O’zbekiston bozora tajribaga egamiz',
	},
	{
		id: 2,
		icon: <GiBookmarklet size={30} />,
		title: 'Tajribali ustozlar',
		desc: 'Bizda IELTS darajasi 9.0 gacha bo’lgan ustozlar bor',
	},
	{
		id: 3,
		icon: <GoShieldCheck size={30} />,
		title: 'Ishonchli imtihon olish tizimi',
		desc: 'Imtihonlar maxsus nazoratchi tomonan olib boriladi',
	},
	{
		id: 4,
		icon: <FaUsers size={30} /> ,
		title: "Qo'shimcha ustoz bilan bepul darslar",
		desc: 'Bizning qo’shimcha ustozlarimiz sizga yordam berishga doim tayyor',
	},
	{
		id: 5,
		icon: <FaComputer size={30} />,
		title: 'Bepul co-working hududlar',
		desc: 'IT Zone siz uchun eng qulay co-working hududlar yaratgan',
	},
	{
		id: 6,
		icon: <CgUserlane size={30} />,
		title: 'Bepul tadbirlar',
		desc: 'Har yakshanba bepul seminarlar, Speaking klublari, treninglar',
	},
];

export default data;
