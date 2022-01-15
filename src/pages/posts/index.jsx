import Head from "next/head";
import { Posts as PostsComponent } from "src/components/Posts";

export default function Posts() {
  return (
    <div>
      <Head>
        <title>投稿一覧</title>
      </Head>
      <PostsComponent />
    </div>
  );
}
