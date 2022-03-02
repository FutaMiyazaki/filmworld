import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
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
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
        sx={{ mb: 4 }}
      >
        <Grid item xs={4} sm={2}>
          <FilterByYear path="/movies/popular?" />
        </Grid>
      </Grid>
      <PopularMovies />
    </div>
  );
};

export default MoviesPopular;
