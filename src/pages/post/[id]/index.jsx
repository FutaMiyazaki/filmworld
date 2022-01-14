import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Layout/Header";
import { Post } from "src/components/Post";

export default function PostId() {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
}
