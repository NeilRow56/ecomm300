import nc from 'next-connect';
import {
	getSingleProduct,
	updateProduct,
	deleteProduct,
} from '../../../controllers/productControllers';

import dbConnect from '../../../lib/dbConnect';

const handler = nc();

dbConnect();

handler.get(getSingleProduct);

handler.put(updateProduct);

handler.delete(deleteProduct);

export default handler;
