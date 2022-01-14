import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";
import { Footer } from "src/components/Layout/Footer";
import { Posts as PostsComponent } from "src/components/Posts";

export default function Posts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>indexページ</title>
      </Head>
      <Header />
      <PostsComponent />
      <Footer />
    </div>
  );
}
