import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { RankingButtonLinks } from "src/components/Layout/Link/RankingButtonLinks";
import { PageHeading } from "src/components/Layout/PageHeading";
import { Movies } from "src/components/Movies/index";
import { useScoreMovies } from "src/hooks/useScoreMovies";

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
          <FilterByYear path="/movies/topic?" />
        </Grid>
      </Grid>
      <Movies
        movies={movies?.results}
        error={error}
        isLoading={isLoading}
        maxDisplay={20}
        path={path}
        totalPages={movies?.total_pages}
      />
    </div>
  );
};

export default MoviesTopic;
