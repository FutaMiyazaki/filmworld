import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Layout/Header';
import { Footer } from 'src/components/Layout/Footer';
import { Main } from 'src/components/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>react app by miya</title>
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  )
}
