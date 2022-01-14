import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";
import { Posts } from "src/components/Posts";
import { Footer } from "src/components/Layout/Footer";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>indexページ</title>
      </Head>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
