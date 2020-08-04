import Head from 'next/head';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Khwilo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
