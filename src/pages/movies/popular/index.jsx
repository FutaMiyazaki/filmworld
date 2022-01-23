import Head from "next/head";
import { PopularMovies } from "src/components/Movies/PopularMovies";

export default function index() {
  return (
    <div>
      <Head>
        <title>人気の映画 - FilmWorld</title>
      </Head>
      <PopularMovies />
    </div>
  );
}
