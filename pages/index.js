import Head from 'next/head';

import axios from 'axios';
import ProductList from '../Components/ProductList';

export default function Home({ productList }) {
	return (
		<>
			<Head>
				<title>Next-Amazona</title>
				<meta name="description" content="Best pizzas in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="dark:bg-black ">
				<ProductList productList={productList} />
			</div>
		</>
	);
}
export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products');
	return {
		props: {
			productList: res.data,
		},
	};
};
