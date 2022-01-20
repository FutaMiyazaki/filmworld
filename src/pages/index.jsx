import Head from "next/head";
import { PopularMovies } from "src/components/Movies/PopularMovies";
import { IconHeading } from "src/components/Layout/IconHeading";

export default function Index() {
  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <IconHeading icon="TrendingUp" text="人気の映画" />
      <PopularMovies />
      <IconHeading icon="TrendingUp" text="最新の映画" />
    </div>
  );
}
