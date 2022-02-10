import Head from "next/head";
import { useRouter } from "next/router";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { PageHeading } from "src/components/Layout/PageHeading";
import { PopularMovies } from "src/components/Movies/PopularMovies";

export default function MoviesPopular() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>
          {router.query.year
            ? `${router.query.year}年代の人気ランキング - FilmWorld`
            : "人気ランキング - FilmWorld"}
        </title>
      </Head>
      <PageHeading
        primaryText={router.query.year}
        text={router.query.year ? "年代の人気ランキング" : "人気ランキング"}
      />
      <FilterByYear path="/movies/popular?" />
      <PopularMovies />
    </div>
  );
}
