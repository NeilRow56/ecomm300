import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Nextj-Amazona</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="min-h-screen dark:bg-black ">
				<Navbar />
				<main className="flex-grow container mx-auto px-4 sm:px-6 ">
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
