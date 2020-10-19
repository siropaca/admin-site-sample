import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '../createStore';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
