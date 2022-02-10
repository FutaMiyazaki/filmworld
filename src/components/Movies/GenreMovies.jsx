import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid } from "@mui/material";
import { AppPagination } from "src/components/Layout/AppPagination";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { useGenreMovies } from "src/hooks/useGenreMovies";

export function GenreMovies() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
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
            <Grid key={movie.id} item xs={4} sm={4}>
              {isMobileScreen ? (
                <MobileCard movie={movie} />
              ) : (
                <PcCard movie={movie} />
              )}
            </Grid>
          );
        })}
      </Grid>
      <AppPagination
        movies={movies}
        path={`/movies/genre?id=${router.query.id}&sort=${router.query.sort}&`}
      />
    </div>
  );
}
