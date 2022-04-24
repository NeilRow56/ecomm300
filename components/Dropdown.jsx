import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Dropdown = () => {
	const { cartTotalQuantity } = useSelector((state) => state.cart);

	const [isActive, setIsActive] = useState(false);
	const handleClick = () => setIsActive(!isActive);
	return (
		<div className="relative flex flex-col h-[50px] w-[80px] justify-left mt-4">
			<button
				id="menu-btn"
				className="bg-blue-500  rounded-lg text-white px-2 py-1"
			>
				<div className="flex items-center" onClick={handleClick}>
					<FaShoppingCart />
					<div className="ml-1">{cartTotalQuantity}</div>
					<FaCaretDown className="ml-2" />
				</div>
			</button>
			{isActive && (
				<div
					id="dropdown"
					className="absolute right-0 top-10  flex flex-col text-red-700 bg-gray-200 rounded mt-6 py-2 pl-5  pb-2 w-36 "
				>
					<Link href="/cart" passHref>
						<li
							className="cursor-pointer list-none border-b border-gray-300 
								hover:bg-gray-400 rounded
							hover:text-white
							"
						>
							Cart
						</li>
					</Link>
					<Link href="/" passHref>
						<li
							className="cursor-pointer list-none hover:bg-gray-400 rounded
							hover:text-white"
						>
							Products
						</li>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
