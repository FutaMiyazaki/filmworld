import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { RankingButtonLinks } from "src/components/Layout/Link/RankingButtonLinks";
import { PageHeading } from "src/components/Layout/PageHeading";
import { ScoreMovies } from "src/components/Movies/ScoreMovies";

const MoviesScore: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>
          {router.query.year
            ? `${router.query.year}年公開で話題の映画ランキング - FilmWorld`
            : "話題の映画ランキング - FilmWorld"}
        </title>
      </Head>
      <PageHeading
        text={
          router.query.year
            ? `${router.query.year}年公開で話題の映画ランキング`
            : "話題の映画ランキング"
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
          <FilterByYear path="/movies/score?" />
        </Grid>
      </Grid>
      <ScoreMovies />
    </div>
  );
};

export default MoviesScore;