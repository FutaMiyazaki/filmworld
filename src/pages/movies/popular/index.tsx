import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { RankingButtonLinks } from "src/components/Layout/Link/RankingButtonLinks";
import { PageHeading } from "src/components/Layout/PageHeading";
import { PopularMovies } from "src/components/Movies/PopularMovies";

const MoviesPopular: NextPage = () => {
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
        text={
          router.query.year
            ? `${router.query.year}年代の人気ランキング`
            : "人気ランキング"
        }
      />
      <RankingButtonLinks />
      <FilterByYear path="/movies/popular?" />
      <PopularMovies />
    </div>
  );
};

export default MoviesPopular;
