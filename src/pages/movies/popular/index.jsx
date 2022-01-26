import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { PopularMovies } from "src/components/Movies/PopularMovies";

export default function index() {
  return (
    <div>
      <Head>
        <title>人気の映画 - FilmWorld</title>
      </Head>
      <PageHeading text="人気の映画" />
      <PopularMovies />
    </div>
  );
}
