import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";
import { useGenres } from "src/hooks/useGenres";

const MoviesGenre: NextPage = () => {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const { genres } = useGenres();

  const genreSearch = useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.id) {
        setGenre(genres?.genres[i].name);
      }
    }
  });

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
        <Grid item xs={4} sm={3}>
          <SortMenu path={`/movies/genre?id=${router.query.id}`} />
        </Grid>
      </Grid>
      <GenreMovies />
    </div>
  );
};

export default MoviesGenre;
