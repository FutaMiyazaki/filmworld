import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { PopularMovies } from "src/components/Movies/PopularMovies";

export default function index() {
  return (
    <div>
      <Head>
        <title>今週の人気ランキング - FilmWorld</title>
      </Head>
      <PageHeading text="今週の人気ランキング" />
      <PopularMovies />
    </div>
  );
}
