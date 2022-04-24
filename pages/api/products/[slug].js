import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

export default async function handler(req, res) {
	const {
		method,
		query: { slug },
	} = req;

	dbConnect();

	if (method === 'GET') {
		try {
			const product = await Product.findById(slug);
			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
