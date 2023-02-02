import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Common/Layout/Layout';
import GlobalStyle from '../styles/global-styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {asPath !== '/login' && <Layout />}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
