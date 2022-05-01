import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MovieList } from "src/components/Movies/MovieList";
import { SortSection } from "src/components/Layout/SortSection";
import { useMovieList } from "src/hooks/useMovieList";

const MoviesIndex: NextPage = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const { movieListData, error, isLoading } = useMovieList();

  useEffect(() => {
    router.query.year
      ? setPath(`/movies/popular?year=${router.query.year}&`)
      : setPath(`/movies/popular?`);
  }, [router]);

  console.log(movieListData);

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
      <SortSection path="popular" />
      <MovieList
        movies={movieListData?.results}
        error={error}
        gridLg={5}
        gridMd={4}
        gridSm={3}
        gridXs={2}
        isLoading={isLoading}
        maxDisplay={20}
        path={path}
        totalPages={movieListData?.total_pages}
      />
    </div>
  );
};

export default MoviesIndex;
