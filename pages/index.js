import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Khwilo Kabaka</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <h1>Header</h1>
      </header>

      <main>
        <p>Main</p>
      </main>

      <footer>
        <small>Footer</small>
      </footer>
    </div>
  );
}
