import Head from "next/head";
import { Header } from "src/components/Layout/Header";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>aboutページ</title>
      </Head>
      <Header />
      <h1 className="text-3xl text-red-500">Next.js学習</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみる</p>
    </div>
  );
}
