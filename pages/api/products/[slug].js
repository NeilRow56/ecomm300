import nc from 'next-connect';
import {
	getSingleProduct,
	updateProduct,
	deleteProduct,
} from '../../../controllers/productControllers';

import dbConnect from '../../../lib/dbConnect';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(getSingleProduct);

handler.put(updateProduct);

handler.delete(deleteProduct);

export default handler;
