import { Grid } from "@mui/material";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";
import { Loading } from "src/components/Layout/Loading";
import { MoviesCard } from "src/components/Movies/Card/index";
import { usePopularMovies } from "src/hooks/topMovies/usePopularMovies";

export const PopularMovies = () => {
  const { popularMovies, error, isLoading } = usePopularMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columns={{ xs: 4, sm: 8 }}
      sx={{ mb: 5 }}
    >
      {popularMovies.results.map((movie, i) => {
        return i < 8 ? (
          <Grid key={movie.id} item xs={4} sm={4}>
            <MoviesCard
              movie={{
                id: movie.id,
                title: movie.title,
                posterPath: movie.poster_path,
                releaseDate: movie.release_date,
                voteAverage: movie.vote_average,
                voteCount: movie.vote_count,
              }}
            />
          </Grid>
        ) : null;
      })}
      <Grid item xs={4} sm={4} sx={{ mt: 1 }}>
        <ButtonLink
          path="/movies/popular?page=1"
          text="もっと見る"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
