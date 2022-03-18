import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { Loading } from "src/components/Layout/Loading";
import { PageHeading } from "src/components/Layout/PageHeading";
import { Movies } from "src/components/Movies/index";
import { useGenres } from "src/hooks/useGenres";
import { useGenreMovies } from "src/hooks/useGenreMovies";

const MoviesGenre: NextPage = () => {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const [path, setPath] = useState("");
  const { genres } = useGenres();
  const { movies, error, isLoading } = useGenreMovies();

  useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.id) {
        setGenre(genres?.genres[i].name);
      }
    }
  }, [genres?.genres, router.query.id]);

  useEffect(() => {
    router.query.year
      ? setPath(
          `/movies/genre?id=${router.query.id}&sort=${router.query.sort}&year=${router.query.year}&`
        )
      : setPath(
          `/movies/genre?id=${router.query.id}&sort=${router.query.sort}&`
        );
  }, [router]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{`${genre}の映画 - FilmWorld`}</title>
      </Head>
      <PageHeading text={`${genre}の映画`} />
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
        sx={{ mb: 4 }}
      >
        <Grid item xs={4} sm={2}>
          <FilterByYear
            path={`/movies/genre?id=${router.query.id}&sort=${router.query.sort}&`}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <SortMenu path={`/movies/genre?id=${router.query.id}`} />
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

export default MoviesGenre;
