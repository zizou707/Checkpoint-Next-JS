import Header from '../components/header'
import './globals.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

function MyApp({Component,pageProps}){
  return (
    <>
       <Header /><hr className='header-line'/>
       <Component {...pageProps} />
       <Footer />
    </>
)}

export default MyApp