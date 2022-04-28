import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/CartScreen'), {
	ssr: false,
});

const Cart = () => {
	return (
		<div className="pt-16">
			<DynamicComponent />
		</div>
	);
};

export default Cart;
