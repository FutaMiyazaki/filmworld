import styles from "src/styles/Home.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.footer}>
      <Link href="/">Index</Link>
      <Link href="/posts">Posts</Link>
    </header>
  );
}
