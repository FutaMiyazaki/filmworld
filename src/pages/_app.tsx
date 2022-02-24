import { AppProps } from "next/app";
import Head from "next/head";
import { LayoutMain } from "src/components/Layout/LayoutMain";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </>
  );
}