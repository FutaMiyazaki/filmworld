import Head from "next/head";
import { Movies } from "src/components/Movies/Movies";

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <Movies />
    </div>
  );
}
