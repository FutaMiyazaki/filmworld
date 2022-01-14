import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";

export default function Index(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>aboutページ</title>
      </Head>
      <Header />
      <h1>Next.js学習</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみる</p>
    </div>
  );
}
