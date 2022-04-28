import nc from 'next-connect';
import {
	allProducts,
	newProduct,
} from '../../../controllers/productControllers';

import dbConnect from '../../../lib/dbConnect';

const handler = nc();

dbConnect();

handler.get(allProducts);

handler.post(newProduct);

export default handler;
