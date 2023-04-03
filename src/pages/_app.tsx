import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/globals.scss';
import '@styles/grid.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The NextGameCatalog by Redmund Nacario</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="For your daily news." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
