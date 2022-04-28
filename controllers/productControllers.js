import Product from '../models/Product';

//Get all rooms => /api/products
const allProducts = async (req, res) => {
	try {
		const products = await Product.find();

		res.status(200).json({
			success: true,
			count: products.length,
			products,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

//Create a new product => /api/products
const newProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);

		res.status(200).json({
			success: true,
			product,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

//Get product details => /api/products/:slug
const getSingleProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.query.slug);

		if (!product) {
			res.status(404).json({
				success: false,
				error: 'Product not found with this ID',
			});
		}
		res.status(200).json({
			success: true,
			product,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

//Update product details => /api/products/:slug

const updateProduct = async (req, res) => {
	try {
		let product = await Product.findById(req.query.slug);

		if (!product) {
			res.status(404).json({
				success: false,
				error: 'Product not found with this ID',
			});
		}

		product = await Product.findByIdAndUpdate(req.query.slug, req.body, {
			new: true,
			runValidators: true,
			useFindAndModify: false,
		});

		res.status(200).json({
			success: true,
			product,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

//Delete product details => /api/products/:slug

const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.query.slug);

		if (!product) {
			res.status(404).json({
				success: false,
				error: 'Product not found with this ID',
			});
		}

		await product.remove();

		res.status(200).json({
			success: true,
			message: 'Product is deleted',
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			error: error.message,
		});
	}
};

export {
	allProducts,
	newProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct,
};
