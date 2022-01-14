import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";
import { useRouter } from "next/router";

export default function PostId() {
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.container}>
      <Head>
        <title>indexページ</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
}
