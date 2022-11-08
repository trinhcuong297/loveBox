import { AppProps } from 'next/app';

import Footer from '../component/footer';
import Navbar from '../component/navbar';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
