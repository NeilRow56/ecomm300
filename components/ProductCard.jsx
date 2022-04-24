import Image from 'next/image';

import React from 'react';
import Link from 'next/link';

function ProductCard({ product }) {
	return (
		<div className="text-[#444] mx-auto flex flex-col ">
			<Link href={`/products/${product._id}`} passHref>
				<div className="w-[250px] h-[250px] relative ">
					<Image
						alt={product.name}
						src={product.image}
						layout="fill"
						objectFit="cover"
						className="cursor-pointer rounded-md"
					/>
				</div>
			</Link>

			<h4 className="text-red-700 py-2">{product.name}</h4>
			<span className="font-bold pt-2 pb-4 text-[#666]">
				£ {product.price}
				<button className="ml-4 text-red-700">ADD TO CART</button>
			</span>
		</div>
	);
}

export default ProductCard;
