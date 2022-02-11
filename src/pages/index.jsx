import Head from "next/head";
import { PageHeadingLink } from "src/components/Layout/Link/PageHeadingLink";
import { PopularMovies } from "src/components/Movies/Top/PopularMovies";
import { RevenueMovies } from "src/components/Movies/Top/RevenueMovies";

export default function Index() {
  return (
    <div>
      <Head>
        <title>FilmWorld</title>
      </Head>
      <PageHeadingLink path="/movies/popular?page=1" text="人気ランキング" />
      <PopularMovies />
      <PageHeadingLink
        path="/movies/popular?page=1"
        text="興行収入ランキング"
      />
      <RevenueMovies />
    </div>
  );
}
