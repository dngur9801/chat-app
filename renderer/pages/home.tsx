import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ipcRenderer } from 'electron';

function Home() {
  return (
    <>
      <Link href='/login'>
        <a>Go to next login</a>
      </Link>
    </>
  );
}

export default Home;
