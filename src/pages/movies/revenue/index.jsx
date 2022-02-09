import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { RevenueMovies } from "src/components/Movies/RevenueMovies";

export default function MoviesRevenue() {
  return (
    <div>
      <Head>
        <title>歴代興行収入ランキング - FilmWorld</title>
      </Head>
      <PageHeading text="歴代興行収入ランキング" />
      <RevenueMovies />
    </div>
  );
}
