import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { PageHeading } from "src/components/Layout/PageHeading";
import { ScoreMovies } from "src/components/Movies/ScoreMovies";

const MoviesScore: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>
          {router.query.year
            ? `${router.query.year}年代の評価数ランキング - FilmWorld`
            : "評価数ランキング - FilmWorld"}
        </title>
      </Head>
      <PageHeading
        text={
          router.query.year
            ? `${router.query.year}年代の評価数ランキング`
            : "評価数ランキング"
        }
      />
      <FilterByYear path="/movies/score?" />
      <ScoreMovies />
    </div>
  );
};

export default MoviesScore;
