import nc from 'next-connect';
import dbConnect from '../../../lib/dbConnect';

import { registerUser } from '../../../controllers/authControllers';

const handler = nc();

dbConnect();

handler.post(registerUser);

export default handler;
