import { VFC } from "react";
import { Grid } from "@mui/material";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";
import { TopMovieList } from "src/components/Movies/Top/TopMovieList";
import { useRevenueMovies } from "src/hooks/topMovies/useRevenueMovies";

export const MoviesTopRevenue: VFC = () => {
  const { movies, error, isLoading } = useRevenueMovies();

  return (
    <>
      <TopMovieList
        movies={movies?.results}
        error={error}
        gridLg={4}
        gridMd={3}
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
              path="/movies/revenue?page=1"
              text="もっと見る"
              variant="outlined"
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};
