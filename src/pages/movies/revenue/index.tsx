import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { RankingButtonLinks } from "src/components/Layout/Link/RankingButtonLinks";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MovieList } from "src/components/Movies/MovieList";
import { useRevenueMovies } from "src/hooks/useRevenueMovies";
import { useEffect, useState } from "react";

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
      <Grid container justifyContent="flex-start" sx={{ mb: 4 }}>
        <Grid item xs={5} sm={4} md={3} lg={3}>
          <FilterByYear path="/movies/revenue?" />
        </Grid>
        <Grid item xs={1} sm={1} md={3} lg={4} />
        <Grid item xs={6} sm={7} md={6} lg={5}>
          <RankingButtonLinks />
        </Grid>
      </Grid>
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
