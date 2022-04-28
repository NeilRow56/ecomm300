import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, 'Please enter your first name'],
			maxLength: [50, 'Your first name cannot exceed 50 characters'],
		},
		lastName: {
			type: String,
			required: [true, 'Please enter your last name'],
			maxLength: [50, 'Your last name cannot exceed 50 characters'],
		},
		email: {
			type: String,
			required: [true, 'Please enter your email address'],
			unique: true,
			validate: [validator.isEmail, 'please enter a valid email address'],
		},
		password: {
			type: String,
			required: [true, 'Please enter your password'],
			minLength: [6, 'Your password must be at least 6 characters'],

			select: false,
		},
		// avatar: {
		// 	public_id: {
		// 		type: String,
		// 		required: true,
		// 	},
		// 	url: {
		// 		type: String,
		// 		required: true,
		// 	},
		// },
		isAdmin: {
			type: Boolean,
			default: 'false',
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.models.User || mongoose.model('User', userSchema);
