import { Grid } from "@mui/material";
import { useSimilarMovies } from "src/hooks/useSimilarMovies";
import { Loading } from "src/components/Layout/Loading";
import { MoviesCard } from "src/components/Movies/Card/index";

export const SimilarMovies = () => {
  const { similarMovies, similarMoviesError, isLoading } = useSimilarMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (similarMoviesError) {
    return <div>{similarMoviesError.message}</div>;
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columns={{ xs: 4, sm: 8 }}
    >
      {similarMovies.results?.map((movie, i) => {
        return i < 10 ? (
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
    </Grid>
  );
};
