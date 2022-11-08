import { AppProps } from 'next/app';

import Navbar from '../component/navbar';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default MyApp;
