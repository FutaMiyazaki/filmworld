import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MovieList } from "src/components/Movies/MovieList";
import { useScoreMovies } from "src/hooks/useScoreMovies";
import { SortSection } from "src/components/Layout/SortSection";

const MoviesTopic: NextPage = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const { movies, error, isLoading } = useScoreMovies();

  useEffect(() => {
    router.query.year
      ? setPath(`/movies/topic?year=${router.query.year}&`)
      : setPath(`/movies/topic?`);
  }, [router]);

  return (
    <div>
      <Head>
        <title>
          {router.query.year
            ? `${router.query.year}年公開のレビュー数ランキング - FilmWorld`
            : "レビュー数ランキング - FilmWorld"}
        </title>
      </Head>
      <PageHeading
        text={
          router.query.year
            ? `${router.query.year}年公開のレビュー数ランキング`
            : "レビュー数ランキング"
        }
      />
      <SortSection path="topic" />
      <MovieList
        movies={movies?.results}
        error={error}
        gridLg={5}
        gridMd={4}
        gridSm={3}
        gridXs={2}
        isLoading={isLoading}
        maxDisplay={20}
        path={path}
        totalPages={movies?.total_pages}
      />
    </div>
  );
};

export default MoviesTopic;
