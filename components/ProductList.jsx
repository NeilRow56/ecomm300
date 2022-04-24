import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productList }) => {
	return (
		<div className="w-full   h-full ">
			<div className="flex flex-col dark:bg-black text-center max-w-[1200px] mx-auto bg-white ">
				<h1 className="text-yellow-400 mt-[60px]  py-4">
					THE BEST PANTS IN TOWN
				</h1>
				<p className="text-[#444] dark:text-yellow-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus ipsam ratione, dolorem harum exercitationem
					repellendus repellat veritatis aut distinctio at, beatae
					amet consectetur voluptates iste.{' '}
				</p>

				<div className=" grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{productList.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
