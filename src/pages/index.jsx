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
      <PageHeading text="今週の人気ランキング" />
      <PopularMovies />
      <PageHeading text="歴代興行収入ランキング" />
      <RevenueMovies />
    </div>
  );
}
