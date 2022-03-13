import { AppProps } from "next/app";
import Head from "next/head";
import { LayoutMain } from "src/components/Layout/LayoutMain";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>FilmWorld</title>
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </>
  );
};

export default MyApp;
