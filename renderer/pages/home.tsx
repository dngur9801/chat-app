import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ipcRenderer } from 'electron';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href='/next'>
            <a>Go to next page</a>
          </Link>
        </p>
        <img src='/images/logo.png' />
      </div>
    </>
  );
}

export default Home;
