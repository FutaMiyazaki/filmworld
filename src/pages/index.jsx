import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";
import { Footer } from "src/components/Layout/Footer";
import { Main } from "src/components/Main";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    console.log("foo");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>react app by miya</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
