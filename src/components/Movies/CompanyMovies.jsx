import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { AppPagination } from "src/components/Layout/AppPagination";
import { MoviesCard } from "src/components/Movies/Card/index";
import { useCompanyMovies } from "src/hooks/useCompanyMovies";

export const CompanyMovies = () => {
  const router = useRouter();
  const { movies, error, isLoading } = useCompanyMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
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
        path={`/movies/company?id=${router.query.id}&sort=${router.query.sort}&`}
        totalPages={movies?.total_pages}
      />
    </>
  );
};
