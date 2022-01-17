import Head from "next/head";
import { Movies } from "src/components/Movies/Movies";
import { IconHeading } from "src/components/Layout/IconHeading";

export default function Index() {
  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <IconHeading icon="TrendingUp" text="人気の映画" />
      <Movies />
    </div>
  );
}
