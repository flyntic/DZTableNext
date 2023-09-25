import '../styles/global.css';
import Header from '../components/header';

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <main><Component {...pageProps} /></main>
 
  </>;
}
