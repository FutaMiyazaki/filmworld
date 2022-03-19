import { VFC } from "react";
import { Grid } from "@mui/material";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";
import { MovieList } from "src/components/Movies/MovieList";
import { usePopularMovies } from "src/hooks/topMovies/usePopularMovies";

export const MoviesTopPopular: VFC = () => {
  const { movies, error, isLoading } = usePopularMovies();

  return (
    <>
      <MovieList
        movies={movies?.results}
        error={error}
        gridLg={3}
        gridSm={2}
        gridXs={1}
        isLoading={isLoading}
        maxDisplay={12}
        path="/"
        totalPages={1}
      />
      <Grid
        container
        columns={{ xs: 4, sm: 4, lg: 8 }}
        justifyContent="center"
        sx={{ mt: 2, mb: 4 }}
      >
        <Grid item xs={4} sm={2} lg={3}>
          {isLoading ? null : (
            <ButtonLink
              path="/movies/popular?page=1"
              text="もっと見る"
              variant="outlined"
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};
