import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import Layout from '../components/layout';

import { ThemeProvider } from '@material-ui/core/styles';

import ResetStyle from '../styles/reset';
import GlobalStyle from '../styles/global';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ResetStyle />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {true ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;
