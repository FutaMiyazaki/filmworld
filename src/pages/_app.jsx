import "src/styles/globals.css";
import Head from "next/head";
import { Container } from "src/components/Layout/Container";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
