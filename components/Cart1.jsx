import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const CartScreen = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<div className="w-full mx-auto">
			<h2>Shopping Cart</h2>

			<div>
				<p>Cart is Empty</p>
				<Link href="/" passHref>
					<div className="flex items-center space-x-2 ">
						<HiOutlineArrowNarrowLeft />
						<p>Back to shopping</p>
					</div>
				</Link>
			</div>

			<div>
				<div className="flex ">
					<h3 className="w-[250px] mx-2">Product</h3>
					<h3 className="w-[250px] mx-2">Price</h3>
					<h3 className="w-[250px] mx-2">Quantity</h3>
					<h3 className="w-[250px] mx-2">Total</h3>
				</div>
			</div>
		</div>
	);
};

export default Cart1;
