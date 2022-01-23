import Head from "next/head";
import { PopularMoviesTop } from "src/components/Movies/PopularMoviesTop";
import { IconHeading } from "src/components/Layout/IconHeading";

export default function Index() {
  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <IconHeading icon="TrendingUp" text="人気の映画" />
      <PopularMoviesTop />
    </div>
  );
}
