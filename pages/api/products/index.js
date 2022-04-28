import nc from 'next-connect';
import {
	allProducts,
	newProduct,
} from '../../../controllers/productControllers';

import dbConnect from '../../../lib/dbConnect';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(allProducts);

handler.post(newProduct);

export default handler;
