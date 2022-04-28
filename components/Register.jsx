import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			`/api/users/register`,
			{
				firstName,
				lastName,
				email,
				password,
			},
			config
		);
	};

	return (
		<div className=" min-h-screen flex flex-col">
			<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<form
					autoComplete="off"
					onSubmit={submitHandler}
					className="bg-white px-6 py-2 rounded shadow-md border border-blue-100 text-blue-500 w-full"
				>
					<h1 className="mb-8 text-3xl text-center">Sign up</h1>
					<label className="form-label inline-block mb-2 text-blue-900">
						First Name
					</label>
					<input
						autoComplete="off"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						type="text"
						className="block border border-blue-100 w-full p-3 rounded mb-4"
						name="firstName"
						placeholder=""
					/>
					<label className="form-label inline-block mb-2 text-blue-900">
						Last Name
					</label>
					<input
						autoComplete="off"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						type="text"
						className="block border border-blue-100 w-full p-3 rounded mb-4"
						name="lastName"
						placeholder=""
					/>
					<label className="form-label inline-block mb-2 text-blue-900">
						Email address
					</label>
					<input
						autoComplete="off"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						className="block border border-blue-100 w-full p-3 rounded mb-4"
						name="email"
						placeholder=""
					/>
					<label className="form-label inline-block mb-2 text-blue-900">
						Password - (minimum of 6 characters)
					</label>
					<input
						autoComplete="off"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						className="block border border-blue-100 w-full p-3 rounded mb-4"
						name="password"
						placeholder=""
					/>
					<label className="form-label inline-block mb-2 text-blue-900">
						Confirm Password
					</label>
					<input
						autoComplete="off"
						type="password"
						className="block border border-blue-100 w-full p-3 rounded mb-4"
						name="confirm_password"
						placeholder=""
					/>

					<button
						type="submit"
						className="w-full text-center py-3 rounded bg-[#FB923C] text-white hover:bg-blue-500 focus:outline-none my-1"
					>
						Create Account
					</button>

					<div className="text-center text-sm text-grey-dark mt-4 space-x-1">
						By signing up, you agree to the
						<a
							className="no-underline border-b border-grey-dark text-grey-dark ml-1"
							href="#"
						>
							Terms of Service
						</a>{' '}
						and
						<a
							className="no-underline border-b border-grey-dark text-grey-dark"
							href="#"
						>
							Privacy Policy
						</a>
					</div>
				</form>

				<div className="text-grey-dark mt-6">
					Already have an account?
					<a
						className="no-underline border-b border-blue-100 text-blue-500 ml-1"
						href="/login/"
					>
						Log in
					</a>
					.
				</div>
			</div>
		</div>
	);
};

export default Register;
