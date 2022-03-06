import { Grid } from "@mui/material";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";
import { Movies } from "src/components/Movies/index";
import { useRevenueMovies } from "src/hooks/topMovies/useRevenueMovies";

export const RevenueMovies = () => {
  const { movies, error, isLoading } = useRevenueMovies();

  return (
    <>
      <Movies
        movies={movies?.results}
        error={error}
        isLoading={isLoading}
        path="/"
        totalPages={1}
      />
      <Grid
        container
        justifyContent="center"
        columns={{ xs: 4, sm: 8 }}
        sx={{ my: 4 }}
      >
        <Grid item xs={4} sm={4}>
          <ButtonLink
            path="/movies/revenue?page=1"
            text="もっと見る"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};
