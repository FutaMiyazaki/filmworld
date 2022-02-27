import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { AppPagination } from "src/components/Layout/AppPagination";
import { Loading } from "src/components/Layout/Loading";
import { MoviesCard } from "src/components/Movies/Card/index";
import { useGenreMovies } from "src/hooks/useGenreMovies";

export const GenreMovies = () => {
  const router = useRouter();
  const { movies, error, isLoading } = useGenreMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
      >
        {movies?.results.map((movie) => {
          return (
            movie.poster_path && (
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
            )
          );
        })}
      </Grid>
      <AppPagination
        path={`/movies/genre?id=${router.query.id}&sort=${router.query.sort}&`}
        totalPages={movies?.total_pages}
      />
    </div>
  );
};
