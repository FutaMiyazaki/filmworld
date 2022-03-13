import { VFC } from "react";
import { Grid } from "@mui/material";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";
import { Movies } from "src/components/Movies/index";
import { usePopularMovies } from "src/hooks/topMovies/usePopularMovies";

export const MoviesTopPopular: VFC = () => {
  const { movies, error, isLoading } = usePopularMovies();

  return (
    <>
      <Movies
        movies={movies?.results}
        error={error}
        gridSm={2}
        gridXs={1}
        isLoading={isLoading}
        maxDisplay={8}
        path="/"
        totalPages={1}
      />
      <Grid
        container
        justifyContent="center"
        columns={{ xs: 4, sm: 8 }}
        sx={{ mt: 2, mb: 4 }}
      >
        <Grid item xs={4} sm={3}>
          <ButtonLink
            path="/movies/popular?page=1"
            text="もっと見る"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};
