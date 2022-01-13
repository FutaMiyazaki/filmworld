import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";
import { Footer } from "src/components/Layout/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className={styles.container}>
      <Head>
        <title>indexページ</title>
      </Head>
      <Header />
      <ol>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
      <Footer />
    </div>
  );
}
