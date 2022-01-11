import styles from '../styles/Home.module.css';
import Link from "next/link";


export function Header() {
  return (
    <header className={styles.footer}>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  )
}
