import styles from "src/styles/Home.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.footer}>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
