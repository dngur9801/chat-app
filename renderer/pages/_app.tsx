import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';
import { theme } from '../styles/theme';
import LayoutContainer from '../components/Common/Layout/LayoutContainer';
import { RecoilRoot, useRecoilState } from 'recoil';
import { toastMessageState } from '../states';
import ToastMessage from '../components/Common/ToastMessage/ToastMessage';
import { useEffect } from 'react';
import authAPI from '../components/apis/auth';
import { auth } from '../config/firebaseConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const isLoggendIn = auth.currentUser;
  const router = useRouter();
  // 로그인 여부 값
  useEffect(() => {
    if (!isLoggendIn) {
      router.push('/login');
    }
  }, []);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <LayoutContainer>
            <Component {...pageProps} />
          </LayoutContainer>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
