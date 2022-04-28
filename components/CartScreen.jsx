import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import {
	removeFromCart,
	decreaseCart,
	addToCart,
	clearCart,
	getTotals,
} from '../features/cartSlice';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/router';

const CartScreen = () => {
	const router = useRouter();
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	const handleRemoveFromCart = (cartItem) => {
		dispatch(removeFromCart(cartItem));
	};
	const handleDecreaseCart = (cartItem) => {
		dispatch(decreaseCart(cartItem));
	};
	const handleIncreaseCart = (cartItem) => {
		dispatch(addToCart(cartItem));
	};
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	const checkoutHandler = () => {
		router.push('/shipping');
	};

	return (
		<div className="w-full">
			<div className="w-full justify-center items-center text-center py-10">
				<h2>Shopping Cart</h2>
			</div>
			{cart.cartItems.length === 0 ? (
				<div>
					<div>
						<p> Your shopping cart is empty</p>
					</div>
					<Link href="/" passHref className="cursor-pointer">
						<div className="my-3 flex items-center cursor-pointer">
							<HiOutlineArrowNarrowLeft />
							<h6 className="ml-3">Continue Shopping</h6>
						</div>
					</Link>
				</div>
			) : (
				<>
					<div className="grid grid-cols-5 gap-4 py-3">
						<div className="col-span-2 font-bold ml-2  ">
							Product
						</div>
						<div className="col-span-1 font-bold ">Price</div>
						<div className="col-span-1 font-bold ">Quantity</div>
						<div className="col-span-1 font-bold text-right mr-2">
							Total
						</div>
					</div>
					<div className="border border-gray-200"></div>

					<>
						{cart.cartItems?.map((cartItem) => (
							<div key={cartItem._id}>
								<div className="grid grid-cols-5 md:gap-4 py-3  h-[120px] items-center justify-center ">
									<div className="col-span-2 font-bold ml-2 flex ">
										<Link href="/" passHref>
											<div className=" w-[80px] h-[80px] md:w-[100px] md:h-[100px] relative cursor-pointer ">
												<Image
													alt={cartItem.name}
													src={cartItem.image}
													layout="fill"
													objectFit="cover"
													className="cursor-pointer rounded-md"
												/>
											</div>
										</Link>
										<div className="ml-3 flex flex-col">
											<h4> {cartItem.name}</h4>
											<p className="font-light">
												{cartItem.description}
											</p>
											<button
												onClick={() =>
													handleRemoveFromCart(
														cartItem
													)
												}
												className="bg-red-600 text-white w-[70px] rounded-md mt-2"
											>
												Remove
											</button>
										</div>
									</div>
									<div className="col-span-1  text-left">
										£ {cartItem.price}
									</div>
									<div className="col-span-1 font-bold ">
										<div className="border border-gray-200 text-center  rounded-md  h-10 w-[60px] md:w-[120px]">
											<div className=" flex ml-1 md:ml-0">
												<button
													onClick={() =>
														handleDecreaseCart(
															cartItem
														)
													}
													className="mx-auto  w-3 md:w-6  text-2xl "
												>
													-
												</button>
												<div className=" text-lg pt-1">
													{cartItem.cartQuantity}
												</div>

												<button
													onClick={() =>
														handleIncreaseCart(
															cartItem
														)
													}
													className="mx-auto w-3 md:w-6  text-2xl"
												>
													+
												</button>
											</div>
										</div>
									</div>
									<div className="col-span-1 font-bold text-right mr-2">
										£{' '}
										{cartItem.cartQuantity * cartItem.price}
									</div>
								</div>
								<div className="border border-gray-200 flex w-full"></div>
							</div>
						))}
					</>

					<div className="min-w-full flex justify-between ">
						<div>
							<button
								onClick={() => handleClearCart()}
								className="border border-gray-200 rounded-md mt-5 w-[120px] ml-2 h-10"
							>
								Clear Cart
							</button>
						</div>
						<div className="flex flex-col">
							<div className="flex items-center my-3  ">
								<h4 className="ml-2 font-semibold ">
									Subtotal
								</h4>

								<div className=" w-[50px] md:w-[150px]"></div>
								<div className="text-right justify-right w-full mr-2 font-semibold">
									£ {cart.cartTotalAmount}
								</div>
							</div>
							<div>
								<p className="mr-2 my-2">
									Taxes and shipping calculated at checkout
								</p>
							</div>
							<div className=" mx-auto">
								<button
									onClick={checkoutHandler}
									className="rounded-md w-[130px] my-2 bg-blue-600 text-white py-1"
								>
									Check out
								</button>
							</div>
							<Link href="/" passHref className="">
								<div className="my-3 flex items-center cursor-pointer">
									<HiOutlineArrowNarrowLeft />
									<h6 className="ml-3">Continue Shopping</h6>
								</div>
							</Link>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default CartScreen;
