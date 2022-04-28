import User from '../models/User';

// Register user => /api/auth/register
const registerUser = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	const user = await User.create({
		firstName,
		lastName,
		email,
		password,
		avatar: {
			public_id: 'PUBLIC_ID',
			url: 'URL',
		},
	});

	res.status(200).json({
		success: true,
		message: 'Account registered successfully',
	});
};

export { registerUser };
