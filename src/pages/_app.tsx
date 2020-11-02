import 'tailwindcss/tailwind.css';
import '../styles/style.css';
import Router from 'next/router';
import withGa from 'next-ga';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGa('UA-169353371-1', Router)(MyApp);