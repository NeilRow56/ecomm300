import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import { BsFillTelephoneOutboundFill } from 'react-icons/bs';

import Dropdown from '../components/Dropdown';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaPinterest,
	FaYoutube,
} from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/solid';
import { MoonIcon } from '@heroicons/react/solid';

function Navbar() {
	const [nav, setNav] = useState(false);
	const [logo, setLogo] = useState(false);
	const handleNav = () => {
		setNav(!nav);
		setLogo(!logo);
	};
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className="w-7 h-7 text-yellow-500 "
					role="button"
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className=" text-yellow-600 bg-gray-900 rounded-full h-7 w-7 "
					role="button"
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};
	return (
		<div className="flex  w-full justify-between items-center h-18 px-4 fixed z-10 bg-gray-700 text-white dark:bg-gray-900  ">
			<div className="flex w-full justify-between max-w-[1300px] mx-auto">
				<div className="flex  ">
					<div className="my-auto  ">
						<div className=' mb-2 font-["Pacifico"]'>
							<h2
								onClick={handleNav}
								className={logo ? 'hidden' : 'block'}
							>
								Amazona
							</h2>
						</div>
					</div>
					<div className=" ml-4  sm:ml-5 my-auto hidden xl:block  ">
						<BsFillTelephoneOutboundFill
							size={25}
							className="mb-2"
						/>
					</div>
					<div className="ml-4 sm:ml-10 my-auto">
						<h5 className="hidden sm:block text-sm md:text-[14px] lg:text-[18px] xl:text-[22px]">
							012 345 678
						</h5>
					</div>
					<div className="my-auto ml-6  sm:ml-6 md:ml-40 xl:ml-48">
						{renderThemeChanger()}
					</div>
				</div>
				<div className="min-w-[100px] hidden md:block my-auto">
					<form className=" px-8 ">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="search"
							type="text"
							placeholder="Search"
						/>
					</form>
				</div>
				<ul className="hidden lg:flex items-center space-x-4">
					<Link href="/" passHref>
						<li className="cursor-pointer">
							<a>Products </a>
						</li>
					</Link>

					<li>Contact us</li>
				</ul>
				<div className="my-auto mr-2">
					<Dropdown />
				</div>
			</div>
			{/* Hamburger  */}
			<div onClick={handleNav} className="lg:hidden z-10  ">
				{nav ? (
					<AiOutlineClose className="text-black" sizs={20} />
				) : (
					<HiOutlineMenuAlt4 size={20} />
				)}
			</div>
			{/* Mobile menu dropdown */}
			<div
				onClick={handleNav}
				className={
					nav
						? 'absolute text-gray-900 left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'
						: 'absolute left-[-100%]'
				}
			>
				<ul>
					<h1 className="font-['Pacifico'] ">Amazona.</h1>
					<li className="border-b">Homepage</li>
					<li className="border-b">Products</li>
					<li className="border-b">Menu</li>
					<li className="border-b">Events</li>
					<li className="border-b">Blog</li>
					<li className="border-b">Contact</li>
					<div className=" flex flex-row justify-between my-6">
						<FaFacebook className="icon" />
						<FaTwitter className="icon" />
						<FaYoutube className="icon" />
						<FaPinterest className="icon" />
						<FaInstagram className="icon" />
					</div>
				</ul>
			</div>
		</div>
	);
}
export default Navbar;
