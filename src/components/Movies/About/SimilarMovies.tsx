import { Grid } from "@mui/material";
import { useSimilarMovies } from "src/hooks/useSimilarMovies";
import { Loading } from "src/components/Layout/Loading";
import { MoviesCard } from "src/components/Movies/Card/index";

type movieType = {
  id: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  vote_average: 0;
  vote_count: 0;
};

export const SimilarMovies = () => {
  const { similarMovies, error, isLoading } = useSimilarMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8 }}
      justifyContent="center"
      spacing={2}
    >
      {similarMovies.results?.map((movie: movieType, i: number) => {
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
