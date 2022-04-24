import Layout from '../components/Layout';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../redux/store'; // Importing redux store
import { Provider } from 'react-redux'; // Importing Provider
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<ToastContainer />
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</ThemeProvider>
	);
}

export default MyApp;
