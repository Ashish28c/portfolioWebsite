// _app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ashish Chauhan | Portfolio</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>
      <div className="font-bodyFont">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
