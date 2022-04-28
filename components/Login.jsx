import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const { data } = await axios.post('/api/users/login', {
				email,
				password,
			});
			alert('success login');
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<div className=" min-h-screen flex flex-col">
			<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<form
					autoComplete="off"
					onSubmit={submitHandler}
					className="bg-white px-6 py-2 rounded shadow-md border border-blue-100 text-blue-500 w-full"
				>
					<h1 className="mb-8 text-3xl text-center">Login</h1>
					<label className="form-label inline-block mb-2 text-blue-900">
						Email address
					</label>
					<input
						autoComplete="off"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						className="block border border-blue-100 w-full p-3 rounded mb-4"
						name="email"
						placeholder="example@email.com"
					/>
					<label className="form-label inline-block mb-2 text-blue-900">
						Password
					</label>
					<input
						autoComplete="off"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						className="block border border-blue-100 w-full p-3 rounded mb-4"
						name="password"
						placeholder="Password"
					/>

					<button
						type="submit"
						className="w-full text-center py-3 rounded bg-[#FB923C] text-white hover:bg-blue-500 focus:outline-none my-1"
					>
						Login
					</button>

					<div className="text-center text-sm text-grey-dark mt-4 space-x-1">
						By logging in, you agree to the
						<Link href="/terms" passHref>
							<a className="no-underline border-b border-grey-dark text-grey-dark ml-1">
								Terms of Service
							</a>
						</Link>
						and
						<a
							className="no-underline border-b border-grey-dark text-grey-dark"
							href="/privacy"
						>
							Privacy Policy
						</a>
					</div>
				</form>

				<div className="text-grey-dark mt-6">
					Not yet registered?
					<a
						className="no-underline border-b border-blue-100 text-blue-500 ml-1"
						href="/register"
					>
						Register
					</a>
					.
				</div>
			</div>
		</div>
	);
};

export default Login;
