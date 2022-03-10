import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { RankingButtonLinks } from "src/components/Layout/Link/RankingButtonLinks";
import { PageHeading } from "src/components/Layout/PageHeading";
import { Movies } from "src/components/Movies/index";
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
      <RankingButtonLinks />
      <Grid
        container
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
        sx={{ mb: 4 }}
      >
        <Grid item xs={4} sm={2}>
          <FilterByYear path="/movies/revenue?" />
        </Grid>
      </Grid>
      <Movies
        movies={movies?.results}
        error={error}
        gridSm={3}
        gridXs={1}
        isLoading={isLoading}
        maxDisplay={20}
        path={path}
        totalPages={movies?.total_pages}
      />
    </div>
  );
};

export default MoviesRevenue;
