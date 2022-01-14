import Head from "next/head";
import { Header } from "src/components/Layout/Header";
import { Footer } from "src/components/Layout/Footer";
import { Posts as PostsComponent } from "src/components/Posts";

export default function Posts() {
  return (
    <div>
      <Head>
        <title>indexページ</title>
      </Head>
      <Header />
      <PostsComponent />
      <Footer />
    </div>
  );
}
