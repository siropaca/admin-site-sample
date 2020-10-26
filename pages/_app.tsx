import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '../store';
import Layout from '../components/layout';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ResetStyle from '../styles/reset';
import GlobalStyle from '../styles/global';
import customTheme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = createMuiTheme({
    ...customTheme,
    palette: {
      type: pageProps.darkMode ? 'dark' : 'light'
    }
  });

  return (
    <Provider store={createStore()}>
      <Head>
        <title>BortShare Management</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        {pageProps.layout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
