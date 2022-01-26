import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { PopularMovies } from "src/components/Movies/Top/PopularMovies";
import { RevenueMovies } from "src/components/Movies/Top/RevenueMovies";

export default function Index() {
  return (
    <div>
      <Head>
        <title>FilmWorld</title>
      </Head>
      <PageHeading text="人気の映画 ※毎日更新されます" />
      <PopularMovies />
      <PageHeading text="興行収入ランキング" />
      <RevenueMovies />
    </div>
  );
}
