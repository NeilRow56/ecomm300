import Shipping from '../components/Shipping';

import React from 'react';
import { useRouter } from 'next/router';

function ShippingScreen() {
	const router = useRouter();
	router.push('/login');
	return (
		<div className="w-full justify-center mx-auto max-w-[1440px]">
			<Shipping />
		</div>
	);
}

export default ShippingScreen;
