import Product from '../models/Product';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';

//Get all rooms => /api/products
const allProducts = catchAsyncErrors(async (req, res) => {
	const resPerPage = 3;
	const productsCount = await Product.countDocuments();

	const apiFeatures = new APIFeatures(Product.find(), req.query)
		.search()
		.filter();

	let products = await apiFeatures.query;
	let filteredProductsCount = products.length;

	apiFeatures.pagination(resPerPage);
	products = await apiFeatures.query.clone(); // Simply add clone like this.

	res.status(200).json({
		success: true,
		productsCount,
		resPerPage,
		filteredProductsCount,
		products,
	});
});

//Create a new product => /api/products
const newProduct = catchAsyncErrors(async (req, res) => {
	const product = await Product.create(req.body);

	res.status(200).json({
		success: true,
		product,
	});
});

//Get product details => /api/products/:slug
const getSingleProduct = catchAsyncErrors(async (req, res) => {
	const product = await Product.findById(req.query.slug);

	if (!product) {
		// res.status(404).json({
		// 	success: false,
		// 	error: 'Product not found with this ID',
		// });
		return next(new ErrorHandler('Product not found with this ID', 404));
	}
	res.status(200).json({
		success: true,
		product,
	});
});

//Update product details => /api/products/:slug

const updateProduct = catchAsyncErrors(async (req, res) => {
	let product = await Product.findById(req.query.slug);

	if (!product) {
		// res.status(404).json({
		// 	success: false,
		// 	error: 'Product not found with this ID',
		// });
		return next(new ErrorHandler('Product not found with this ID', 404));
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
});

//Delete product details => /api/products/:slug

const deleteProduct = catchAsyncErrors(async (req, res) => {
	const product = await Product.findById(req.query.slug);

	if (!product) {
		// res.status(404).json({
		// 	success: false,
		// 	error: 'Product not found with this ID',
		// });
		return next(new ErrorHandler('Product not found with this ID', 404));
	}

	await product.remove();

	res.status(200).json({
		success: true,
		message: 'Product is deleted',
	});
});

export {
	allProducts,
	newProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct,
};
