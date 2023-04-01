import type { AppProps } from 'next/app';
import Head from 'next/head';

// import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The NextGameCatalog by Redmund Nacario</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="For your daily news." />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        /> */}
      </Head>
      <main>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </main>
    </>
  );
}
