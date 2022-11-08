import { AppProps } from 'next/app';

import Navbar from '../component/navbar';
import Sidebar from '../component/sidebar';
import '../styles/global.css';
import { Footer } from '../templates/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <div className="bg-gray-100">
      <div className="z-10">
        <Navbar />
      </div>
      <div className="fixed left-0 hidden md:block z-10">
        <Sidebar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
);

export default MyApp;
