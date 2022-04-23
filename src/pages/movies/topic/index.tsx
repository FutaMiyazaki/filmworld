import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { RankingButtonLinks } from "src/components/Layout/Link/RankingButtonLinks";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MovieList } from "src/components/Movies/MovieList";
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
      <Grid container justifyContent="flex-start" sx={{ mb: 4 }}>
        <Grid item xs={5} sm={4} md={3} lg={3}>
          <FilterByYear path="/movies/topic?" />
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

export default MoviesTopic;
