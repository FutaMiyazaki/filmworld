import Head from "next/head";
import { LayoutMain } from "src/components/Layout/LayoutMain";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </>
  );
}
