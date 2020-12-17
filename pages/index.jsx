import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next сборка</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Сборка для next.js</h1>
        <p>Ай диги дай</p>
        <Link href="/redux"> Пример работы с redux</Link>
      </Layout>
    </>
  );
}
