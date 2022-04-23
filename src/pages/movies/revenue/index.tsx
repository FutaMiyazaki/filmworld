import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MovieList } from "src/components/Movies/MovieList";
import { useRevenueMovies } from "src/hooks/useRevenueMovies";
import { SortSection } from "src/components/Layout/SortSection";

const MoviesRevenue: NextPage = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const { movies, error, isLoading } = useRevenueMovies();

  useEffect(() => {
    router.query.year
      ? setPath(`/movies/revenue?year=${router.query.year}&`)
      : setPath(`/movies/revenue?`);
  }, [router]);

  return (
    <div>
      <Head>
        <title>
          {router.query.year
            ? `${router.query.year}年代の興行収入ランキング - FilmWorld`
            : "興行収入ランキング - FilmWorld"}
        </title>
      </Head>
      <PageHeading
        text={
          router.query.year
            ? `${router.query.year}年代の興行収入ランキング`
            : "興行収入ランキング"
        }
      />
      <SortSection path="revenue" />
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

export default MoviesRevenue;
